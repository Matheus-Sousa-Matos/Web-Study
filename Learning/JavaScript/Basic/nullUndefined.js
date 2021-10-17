let value //not initialized
console.log(value)

value = null // value null 
console.log(value)

const product = {}
console.log(product.price)
console.log(product)

product.price = 3.50
console.log(product)

//not used undefined 
product.price = undefined
console.log(!!product.price)
//delete product.price 
console.log(product)
product.price = null
console.log(!!product.price)

