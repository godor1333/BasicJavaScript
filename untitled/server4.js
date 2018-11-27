let http = require("http");
let url = require("url");
new http.Server((req,res) => {
    console.log(req.method, req.url);
    let parsedURL = url.parse(req.url, true);
    if (parsedURL.pathname == "/echo"
        && parsedURL.query.msg) {
} else {
    res.statusCode = 404;
    res.end("Help! I can't find it");
}
}).listen(3004,"127.0.0.1");