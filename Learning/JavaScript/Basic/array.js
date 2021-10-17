//declare values
const values = [7.2,22.0,334.1,42.3]
console.log(values[3])

//No value in position 4
console.log(values[4])

//New value in position 4
values[4] = 10

//Show values
console.log(values)

//Length array
console.log(values.length)

//Heterogeneous array 
values.push({id: 3} , false, null , 'test')
console.log(values)

//Pop element array 
console.log(values.pop())

//Delete element in array 
delete values[7]
console.log(values)

//Type array
console.log(typeof values)