var winston = require('winston'),//загрузили модуль winston который установлен через npm
    http = require('http'),// http модуль для того чтобы
    name = 'My App';
winston.error('booting %o',name);// в error сообщаем что происходит загрузка нашего приложения
http.createServer(function(req, res){
    winston.info(req.method + ' ' + req.url);//при каждом обращении в инфо загружаем информацию о обращении к нашему серверу
    res.end('hello\n');
}).listen(3007,function(){
    winston.info('listening');
});
require('./worker3');//подгружает модуль worker2