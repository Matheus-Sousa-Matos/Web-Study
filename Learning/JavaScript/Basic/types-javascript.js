//Type number 
const value1 = 1.0;
const value2 = Number('2.0');

console.log(value1, value2);
//Verify is integer
console.log(Number.isInteger(value1));
console.log(Number.isInteger(value2));

//Change valuefloat 
const valueFloat = 8.232;
console.log(valueFloat.toFixed(2));//Number fixed 
console.log(valueFloat.toString(2)); //To string in binary 
console.log(typeof valueFloat);

//Type String
let str = "string"

//Char in position 4
console.log(str.charAt(4))
//Char in table ascii 
console.log(str.charCodeAt(4))
//Return index if char exists in the str
console.log(str.indexOf('t'))
//index forward
console.log(str.substring(1))
console.log(str.substring(0,3))
//Concat
console.log("Contcat".concat(str).concat("!!"))
console.log("Concat" + str + "Concat2")
//Replace one element with another
console.log(str.replace('i','e'))
//Separate by array 
console.log('Ana, Maria , Pedro '.split(','))