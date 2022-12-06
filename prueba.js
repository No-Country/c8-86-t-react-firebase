let string1 = 'Aceite'
let string2 = 'Una nueva clase de aceite'

string1 = string1.toLowerCase()
string2 = string2.toLowerCase()

let array1 = string1.split(' ')
let array2 = string2.split(' ')

console.log(string2.includes(string1))

emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

console.log(emailRegex.test('sebastian@gmail.com'))
console.log(emailRegex.test('sebastian@gmail.com'))