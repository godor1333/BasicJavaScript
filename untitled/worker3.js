var winston = require('winston');
var logger =winston.createLogger(({//содздаем свой логгер  на основе винстона в котором говорим
    levels:{//что у нас будут все доступные уровни логгирования
        debug:0,
        info:1,
        warn:2,
        error:3
    },
    transports: [// указывает куда будет осуществляться логирование
        new (winston.transports.Console)(),
        new (winston.transports.File)(
            {filename:'somefile.log'}
        )
    ]
}));
function work() {
    logger.log("debug",//log уровень debug
        'doing lots of uninteresting work');// в debug сообщает что мы делаем каккю то работу каждые 2 секунды
    setTimeout(work, Math.random()* 2000);
}
work();
function workb() {
    logger.debug('doing some work');// каждые 3 секунды выполняет какую то работу
    setTimeout(workb, Math.random() * 3000);
}
workb();