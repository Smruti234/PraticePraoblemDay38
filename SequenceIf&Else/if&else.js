let a = Math.floor(Math.random() * (600) + 100);
let b = Math.floor(Math.random() * (600) + 100);
let c = Math.floor(Math.random() * (600) + 100);
let d = Math.floor(Math.random() * (600) + 100);
let e = Math.floor(Math.random() * (600) + 100);

if (a>b && a>c && a>d && a>e){
    console.log("Maximum is " + a);
}
else if (b>a && b>c && b>d && b>e){
    console.log("Maximum is " + b);
}
else if (c>a && c>b && c>d && c>e){
    console.log("Maximum is " + c);
}
else if (d>a && d>c && d>b && d>e){
    console.log("Maximum is " +d);
}
else{
    console.log("Maximum is " + e);
}
//Minimum number
if (a<b && a<c && a<d && a<e){
    console.log("Minimum is " + a);
}
else if (b<a && b<c && b<d && b<e){
    console.log("Minimum is " + b);
}
else if (c<a && c<b && c<d && c<e){
    console.log("Minimum is " + c);
}
else if (d<a && d<c && d<b && d<e){
    console.log("Minimum is " +d);
}
else{
    console.log("Minimum is " + e);
}