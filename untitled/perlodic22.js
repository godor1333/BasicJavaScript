let counter = 0;
let interval = setInterval(() => {

    console.log("counter =",++counter);
    if(counter === 228)
        clearInterval(interval);
},300);
console.log("last row");