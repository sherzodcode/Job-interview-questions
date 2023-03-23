/// Для чего используется директива «use strict»?

/// «use strict» — это директива ES5, которая заставляет весь наш код или код отдельной функции выполняться в строгом режиме. Строгий режим вводит некоторые ограничения по написанию кода, тем самым позволяя избегать ошибок на ранних этапах

/// Нельзя присваивать значения или обращаться к необъявленным переменным

/// function returnY() {
//     'use strict'
//     y = 123
//     return y
// }
// returnY() // Uncaught ReferenceError: y is not defined

/// Запрещено присваивать значения глобальный переменным, доступным только для чтения или записи

// 'use strict'
// var NaN = NaN // Uncaught TypeError: Cannot assign to read only property 'NaN' of object '#<Window>'
// var undefined = undefined
// var Infinity = 'and beyond


/// Нельзя удалить «неудаляемое» свойство объекта:

// 'use strict'
// const obj = {}

// Object.defineProperties(obj, 'x', {
//     value: 1
// })

// delete obj.x // Uncaught TypeError: Property description must be an object: x


//// Запрещено дублирование параметров:

/// 'use strict'

// function someFunc(a, b, b, c) {} // Uncaught SyntaxError: Duplicate parameter name not allowed in this context


/// Нельзя создавать функции с помощью функции eval:


/// 'use strict'

// eval('var x = 1')

// console.log(x) // Uncaught ReferenceError: x is not defined

/// Значением «this» по умолчанию является undefined:


/// 'use strict'

function showMeThis() {
    return this
}

showMeThis() // undefined

