///  В чем разница между оператором «in» и методом hasOwnProperty?

/// Отличие состоит в том, что оператор «in» проверяет наличие свойства не только в самом объекте, но и в его прототипах, а метод hasOwnProperty — только в объекте.

console.log('prop' in o) // true
console.log('toString' in o) // true

console.log(o.hasOwnProperty('prop')) // true
console.log(o.hasOwnProperty('toString')) // false

