
// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
let count=0;
function counter(){
    console.log(count);
count++;
helper();
}

function helper(){
    setTimeout(counter,1000);
}

helper();





































































//(Hint: setTimeout)