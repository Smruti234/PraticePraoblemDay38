const prompt = require("prompt-sync")();
let number = prompt("Enter number");
if(number == 0){
    console.log("UNIT");
}else if(number == 10 ){
    console.log("TEN");
}else if(number == 100){
    console.log("HUNDRED");
}else if(number == 1000){
    console.log("THOUSAND");
}
else{
    console.log("Invalid input");
}