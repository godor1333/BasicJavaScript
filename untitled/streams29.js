//обработка ошибок при работе с потоками
let fs = require("fs");
let stream = new fs.ReadStream(__filename, {encode:"utf-8"});
stream.on("error",(err)=>{
    console.log(err);
});
stream.on("readable",()=>{
    let data = stream.read();
    if(data)
        console.log(data);
});
stream.on("end",()=>{
    console.log("END");
});
//универсализм для всех потоков