///  Для чего используется метод Function.prototype.apply?

/// Apply используется для привязки определенного объекта к значению this вызываемой функции


const details = {
    message: 'Hello World!'
}

function getMessage(): string {
    return this.message
}

getMessage.apply(details) // Hello World!

/// Этот метод похож на Function.prototype.call. Единственное отличие состоит в том, что в apply аргументы передаются в виде массива.


const person = {
    name: 'Marko Polo'
}

function greeting(greetingMessage) {
    return `${greetingMessage} ${this.name}`
}

greeting.apply(person, ['Hello']) // Hello Marko Polo

