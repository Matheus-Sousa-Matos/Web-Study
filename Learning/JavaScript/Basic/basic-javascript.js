//Commentary equals type C 
console.log("Passo #1");
console.log("Passo #2");

//Code block
{
    console.log(1);
    console.log(3);
    console.log(5);
}

{
    console.log(2);
    console.log(4);
    console.log(6);
}

//Var and let
let nameLet = "Luiz"; //String
var ammout = 30; //Int
var ammout_float = 30.5; //Double
var total = ammout + ammout_float; 

console.log("Name:"+ nameLet);
console.log("Total: "+total);

//This value is immutable
const valueConst = 1;
console.log(valueConst);

//Use typeof for verify data type. 
console.log(typeof total);

//Radius Circle
const PI = 3.14;
let radius = 10;
var area =  radius * radius * PI;
var areaMath = Math.PI * Math.pow(radius,2)

console.log("Area circle: "+area);
console.log("Area Math: "+areaMath.toFixed(2));

//Change values 
let a = 7;
let b = 94
let temp = a;
a = b; 
b = temp; 

console.log("A: "+a);
console.log("B: "+b);
