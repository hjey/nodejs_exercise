const http = require('http'); // auto add .js

const routes = require('./routes'); // routes.js

console.log(routes.someText);
// global module
// 1. 서버 생성
const server = http.createServer(routes.handler);

server.listen(4000);// localhost:3000/


// createServer > req.on
// 노드제이에스는 리스너나 이벤트를 저장한 내부 공간을 가지고 있다.