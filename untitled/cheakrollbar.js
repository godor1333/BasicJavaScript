var Rollbar = require("rollbar");
let rollbar = new Rollbar({
    accessToken: 'ce62ffe050544aeaaed76119d8c5d50c',
    captureUncaught: true,
    captureUnhandledRejections: true
});
rollbar.log("MyLog:Hello World!");
rollbar.debug("MyDebug:Hello World!");