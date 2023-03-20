/// Для чего используется оператор "!!"?
/// Оператор "!!" (двойное отрицание) приводит значение справа от него к логическому значению.

console.log(!!null) // false
console.log(!!undefined) // false
console.log(!!'') // false
console.log(!!0) // false
console.log(!!NaN) // false
console.log(!!' ') // true
console.log(!!{}) // true
console.log(!![]) // true
console.log(!!1) // true
console.log(!![].length) // false