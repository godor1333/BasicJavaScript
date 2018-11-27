//ассихронное чтение файла
let http = require('http'),
    fs = require("fs");
http.createServer((req, res) =>{
    if(req.url = "/"){
        fs.readFile("index.html", (err,data) =>{//если чтение файла прошло не успешно то в первый параметр предет сообщение об ошибки
        if(err){
            console.log(err);
            res.statusCode = 500;
            res.end("Error reading file");
            return;
        }
        res.end(data);
        console.log("answered");
    });
    }
console.log("end of method");
}).listen(3009);
console.log("starded");