//Чат через long-polling чтение POST
// http://learn.javascript.ru/screencast/node.js
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    switch(req.url){
        case '/':
            sendFile("index.html", res);
            break;
        case '/subscribe':
            // ...
            break;
        case '/publish':
            // ...
            break;
        default:
            res.statusCode = 404;
            res.end("Not found");
    }
}).listen(3011);

function sendFile(fileName, res){
    var fileStream = fs.createReadStrem(fileName);
    fileStream
        .on('error', function(){
            res.statusCode = 500;
            res.end("Server error");
        })
        .pipe(res)
        .on('close', function(){
            fileStream.destroy();
        });
}