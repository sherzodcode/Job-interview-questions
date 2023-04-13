/// Как определить наличие свойства в объекте?

/// Существует три способа это сделать
/// Первый способ состоит в использовании оператора «in»:

const o = {
    'prop': 'bwahahah',
    'prop2': 'hweasa'
}

console.log('prop' in o) // true
console.log('prop1' in o) // false

/// Второй — использовать метод hasOwnProperty:

console.log(o.hasOwnProperty('prop2')) // true
console.log(o.hasOwnProperty('prop1')) // false

/// Третий — индексная нотация массива

/// console.log(o['prop']) // bwahahah
console.log(o['prop1']) // undefined
