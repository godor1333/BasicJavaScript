
// var man = {
//     name:"namein",
//     surname:"surnamein",
//     fullName: function() {
//         return this.surname + " " + this.name;
//     }
// };
class Room {

    constructor(windows,owner){
        this.windows=1;
        this.owner="xui";
    }
    set owner1(owner) {
        this.owner=owner;
    }
}
let a = new Room(123,"asdf");
console.log(a.owner,a.owner1,a.windows);
// module.exports.man = man;
// module.exports.Room = Room;