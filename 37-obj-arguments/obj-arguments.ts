/// Что такое объект arguments?

/// Arguments — это коллекция аргументов, передаваемых функции. Это объект, подобный массиву, у него есть свойство length, мы можем получить доступ к определенному значению с помощью arguments[i], но у него отсутствуют методы forEach, reduce, filter и map. Он позволяет узнать количество параметров функции.

/// Преобразовать arguments в массив можно с помощью Array.prototype.slice:

// Array.prototype.slice.call(arguments)

// Запомните: в стрелочных функциях объект arguments не работает.

// function one() {
//     return arguments
// }
// const two = function() {
//     return arguments
// }
// const three = function three({
//     return arguments
// })
// const four = () => arguments

// four() // arguments is not defined


