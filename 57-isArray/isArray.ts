/// Как проверить, является ли значение массивом?

/// Для этого следует использовать метод Array.isArray:

console.log(Array.isArray(5)) // false
console.log(Array.isArray('')) // false
// console.log(Array.isArray()) // false
console.log(Array.isArray(null)) // false
console.log(Array.isArray( {length: 5 })) // false
console.log(Array.isArray([])) // true

/// Если среда, в которой Вы работаете, не поддерживает данный метод, можете использовать такой полифил:

function isArray(value){
    return Object.prototype.toString.call(value) === '[object Array]'
}
