const prompt = require("prompt-sync")();

var n;

n=parseFloat(prompt("enter number :"));

if(n<0){
    console.log("number is negative :");
}
else{
    console.log("number is positive");
}