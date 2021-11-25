const prompt = require("prompt-sync")();
let N = prompt("Enter a number");
const Sunday = 0, Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saterday = 6;
if(N == Sunday){
    console.log("Sunday");
}else if(N == Monday){
    console.log("Monday");
}else if(N == Tuesday){
    console.log("Tuesday");
}else if(N == Wednesday){
    console.log("Wednesday");
}else if(N == Thursday){
    console.log("Thursday");
}else if(N == Friday){
    console.log("Friday");
}else if(N == Saterday){
    console.log("Saturday");
}else{
    console.log("Invalid input");
}