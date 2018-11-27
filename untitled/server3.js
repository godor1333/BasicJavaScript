let http = require("http");
let server = new http.Server((req, res) =>{
    console.log(req.method,req.url);
    res.end(`${req.method} ${req.url}`);
});
server.listen(3002,"127.0.0.1");