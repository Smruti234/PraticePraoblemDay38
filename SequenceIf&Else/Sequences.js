let a = Math.floor(Math.random() * 600 + 100); 
let b = Math.floor(Math.random() * 600 + 100); 
let c = Math.floor(Math.random() * 600 + 100);
let d = Math.floor(Math.random() * 600 + 100);
let e = Math.floor(Math.random() * 600 + 100);

 if(a>b && a>c && a>d && a>e){
     console.log("Maxinum number" + a);
 }
else if (b>a && b>c && b>d && b>e){
    console.log("Maxinum number" + b);
}
else if (c>a && c>b && c>d && c>e){
    console.log("Maxinum number" + c);
}
else if (d>a && d>b && d>c && d>e){
    console.log("Maxinum number" + d);
}
else {
    console.log("Maxinum number" + d);
}
//minimum 
if (a<b && a<c && a<d && a<e){
    console.log("Minimum number " + a);
}
else if (b<a && b<c && b<d && b<e){
    console.log("Minimum number " + b);
}
else if (c<a && c<b && c<d && c<e){
    console.log("Minimum number " + c);
}
else if (d<a && d<c && d<b && d<e){
    console.log("Minimum number" +d);
}
else{
    console.log("Minimum number" + e);
}
