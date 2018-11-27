let http = require("http");
let fs = require("fs");
new http.Server((req,res)=>{
    if(req.url=="/")
        sendFile(new fs.ReadStream("index.html"), res)
}).listen(3010);
function sendFile(file,res){
    file.on("readable",write);
    function write(){
        let data = file.read();//функция внутри функции обработок ошибок и т.п.
        if(data && !res.write(data)){
            file.removeListener("readable",write);
            res.once("drain",()=>{
                file.on("readable", write);
                write();
            });
        }
    }
    file.on("end",()=>res.end());
}
//file.pipe(res)