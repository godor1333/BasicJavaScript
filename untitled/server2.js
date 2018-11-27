let http = require("http");
let server = new http.Server();
server.listen(3001,"127.0.0.1", () => {
    console.log("Server runned",
        "http://127.0.0.1:3001/")});
server.on("request",(req,res) => {
    res.end("Hello World!!!\n");});

