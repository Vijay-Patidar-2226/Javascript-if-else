const prompt = require("prompt-sync")();

//1234

var x,a,b,c,d,reverse;

x = parseInt(prompt("enter four digit number "));
a = Math.floor((x%10));          //4
b = Math.floor(x/1000);           //1
c = Math.floor((x/100) %10);       // 2
d = Math.floor((x%100) /10);         //3
reverse = a*1000+d*100+c*10+b;

console.log("reverse  number: ",reverse);

if(reverse==x){
    console.log("no. is palindrome");
}
else{
    console.log("no.is not palindrome");
}