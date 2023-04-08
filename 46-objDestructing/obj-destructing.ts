/// Что такое деструктуризация объекта (Object Destructuring)?

/// Деструктуризация — относительно новый способ получения (извлечения) значений объекта или массива.

// Допустим, у нас есть такой объект:

const employee = {
    firstName: 'Marko',
    lastName: 'Polo',
    position: 'Software Developer',
    yearHired: 2017
}

/// Раньше для получения свойств объекта мы создавали переменные для каждого свойства. Это было очень скучно и сильно раздражало:

// var firstName = employee.firstName
// var lastName = employee.lastName
// var position = employee.position
// var yearHired = employee.yearHired

/// Использование деструктуризации позволяет сделать код чище и отнимает меньше времени. Синтаксис деструктуризации следующий: заключаем свойства объекта, которые хотим получить, в фигурные скобки ({ }), а если речь идет о массиве — в квадратные скобки ([ ]):

let { firstName, lastName, position, yearHired } = employee


/// Для изменения имени переменной следует использовать «propertyName: newName»:

/// Для присвоения переменным значения по умолчанию следует использовать «propertyName = 'defaultValue'»
