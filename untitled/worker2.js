var winston = require('winston');
function work() {
    winston.log("debug",//log уровень debug
        'doing lots of uninteresting work');// в debug сообщает что мы делаем каккю то работу каждые 2 секунды
    setTimeout(work, Math.random()* 2000);
}
work();
function workb() {
    winston.debug('doing some work');// каждые 3 секунды выполняет какую то работу
    setTimeout(workb, Math.random() * 3000);
}
workb();
// но тут вызывает чо-то там по умолчанию рассмотрим другой пример с тем же винстоном