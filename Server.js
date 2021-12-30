// // 1. 서버 사용을 위해서 http 모듈을 사용한다.(변수의 이름은 마음대로)
// const http = require('http');

// // 2. http의 모듈 서버를 생성한다.
// // function에서 WriteHead에 넘겨줄 파일 타입 체크
// // "hello Node.Js"를 넘겨준다.
// const server = http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type' : "text/html"});
//     res.end("hello Node.Js!!");
// });

// // 3. Listen을 통해서 포트의 번호를 체크하고 열어주는겁니다.
// server.listen(3000,()=>{
//     console.log("3000port server running");
// });

// get server

// www.google.com?id="1234"

// const http = require("http");
// const queryString = require('querystring');

// const url = require("url");

// const server = http.createServer((req, res) => {
//     console.log("========log start========")

//     let parseUrl = url.parse(req.url, true);
//     console.log(parseUrl);

//     let parseQuery = queryString.parse(parseUrl.query,'&','=');
//     console.log(parseQuery);

//     console.log("========log End========")
//     res.writeHead(200,{'Content-Type' : "text/html"});
//     res.end(`parseUrl = ${parseUrl}, parseQuery = `);
// });

// server.listen(3000,() => {
//     console.log("localhost:3000")
// })

// // http://localhost:3000/?var=newData&var2=testsest
// // http://localhost:3000/?var=newData&var2=testest

const http = require('http');
const queryString = require('querystring')

const server = http.createServer((req, res)=>{
    let postVar = '';
    req.on('data',(data)=>{
        postVar=data;
    });
    req.on('end',()=> {
        let parseQuery = queryString.parse(postVar);
        console.log(parseQuery);
        res.writeHead(200,{'Content-Type' : "text/html"});
        res.end(`var1 값=` + parseQuery);
    });
});

server.listen(3000,()=>{
    console.log('localhost:3000');
});

