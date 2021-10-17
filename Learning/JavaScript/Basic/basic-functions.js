
//Example #1Type function
console.log(typeof Object)
//Example #2 Type function
class Product {}
console.log(typeof Product)

//Function not return 
function printSum(a, b){
    console.log(a+b)
}

printSum(2,3)
printSum(10,5,3,4)
printSum() //Exit NaN = Not parameters 

//Function return 
function sum(a, b){
    return a + b
}

console.log(sum(2,6))

//Others function type 
const printSumOther = function (a, b){
    console.log(a+b)
}

printSumOther(2,1)

//Arrow function 
const sumOther = (a, b) => {
    return a + b
}

console.log(sumOther(2,11))

//Simple function 
const sub = (a,b) => a - b
console.log(sub(2,1))
