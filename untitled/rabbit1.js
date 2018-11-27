let imported = require("./animal");
let rabbit = {

    __proto__:imported.animal,
};
rabbit.walk();