const prompt = require("prompt-sync")();

var x,y,a,b,c;
//153
x = parseInt(prompt("enter three digit  number :"));
a = Math.floor((x/100));
b = Math.floor((x%100) /10);
c = Math.floor((x%10));

//console.log(a,b,c);
y = ((a*a*a) + (b*b*b) + (c*c*c));

if(x==y){
    console.log(`number is  armstrong ${x}==${y} `);
}
else{
console.log(`number is not armstrong ${x}!=${y} `);
}