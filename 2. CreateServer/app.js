const http = require('http'); // auto add .js
const fs = require('fs'); // file system

// global module
// 1. 서버 생성
const server = http.createServer((req, res) => {
    //console.log(req.url, req.method, req.headers);
    // process.exit(); // quit server
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    // 보낼 때 주소로 한정, line 13과 동일
    if (url === '/message' && method === 'POST') {
        const body = [];
        // 2. 이벤트리스너 실행
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk); // const는 값 변경 불가는(non-mutate)한데 push는 보내는 값 변화 가능
        });
        // 이벤트리스너
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString(); // 콘캣이라 스페이스로 나누어진 것도 더해서 저장
            const message = parsedBody.split('=')[1];
            // 라이팅파일스
            // writeFileSync(동기화후 out) vs writeFile(다음 코드도 실행 후 return때 out)
            // (저장할 파일명, 저장할 내용, 언제)
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/'); // .txt다음에 있으면 헤더 내용이 없어 에러남. 바로 나오고 다음 실행
                return res.end();
            });
            //      res.writeHead(302, {}); //statue_code : 302 --> redirection
        });

    }
    res.setHeader('Content-Type', 'text/html'); // html code
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Hello from my node.js Server</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);// localhost:3000/

/*
34
chunk값
<Buffer 6d 65 73 73 61 67 65 3d 73 73>
parseBody값(키 밸류 값)
message=ss
*/

//createServer > req.on
// 노드제이에스는 리스너나 이벤트를 저장한 내부 공간을 가지고 있다.