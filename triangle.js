const prompt = require("prompt-sync")();
var a,b,c,d;
a = parseInt(prompt("enter a number :"));
b = parseInt(prompt("enter b number :"));
c = parseInt(prompt("enter c number :"));
d = a+b+c;

if(180==d){
    console.log("triangle is valid ");
}

else{
    console.log("triangle is not valid ");
}