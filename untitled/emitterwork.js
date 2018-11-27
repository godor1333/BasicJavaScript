const EventEmitter = require("events").EventEmitter
let manager = new EventEmitter();
manager.on("request", (request)=>{
    request.data="data";
});
manager.response =manager.emit("request",{data:"data"}) ;
module.exports.manager = manager