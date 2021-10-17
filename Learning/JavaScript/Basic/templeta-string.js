const nome = 'Rebeca'
const concat = 'Ola ' + nome + '!'
const template = `
    Ola
    ${nome}!`


console.log(concat)
console.log(template)

//Math Expression example... 
console.log(`1 + 1  = ${1+1}`)

//Using func personal.
const up = text1 => text1.toUpperCase()
console.log(`Hey... ${up('Warning')}!`)