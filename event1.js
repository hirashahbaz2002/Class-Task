function update(){
console.log("event is fired");
}
//create variable

var x =10;
var y= 20;

console.log(x*y);

// create function in js

function sum(a,b){

    return a+b;
}

console.log(sum(x,y));

//if i want to assign function to vriable

var mysum = sum;
console.log(mysum);