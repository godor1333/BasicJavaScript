//Альтернатива
let counter = 0;
setTimeout(work,300);
function work(){
    console.log("counter =",++counter);
    if(counter !== 3)
        setTimeout(work,3000);
}
console.log("last row");