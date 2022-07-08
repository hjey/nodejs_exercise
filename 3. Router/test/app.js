const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<p>Nice to Meet You!</p>');
        res.write('<form action=""><input type="submit" class="submitbox" value="Okey!"><button>Go</button>');
        res.write('</form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');

        res.write('<ul><li>User 1</li><li>User 2</li></ul>');

        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') { }
});

server.listen(5000);