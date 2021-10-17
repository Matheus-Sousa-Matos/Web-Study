//Declare object 
const product = {}

//Attributes object
product.name = "Phone"
product.price = 99.99

console.log(product)

//Object with attributes
//Note: Remember struct in other language 
const product2 = {
    name: "T-shirt",
    price: 199.99,
    mark: {
        name: "Seven",
        location: "EUA"
    }
}

console.log(product2)

// File JSON using above object -> '{"name": "T-shirt","price": 199.99,}'