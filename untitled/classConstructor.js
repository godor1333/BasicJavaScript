function makeClass() {
    "use strict";
    class qwer{
        name;
        constructor(name){
            this.name=name;
        }
    }
    return qwer;
}
const qwer = makeClass();
const carrot = new qwer('carrot');
console.log(carrot.name);