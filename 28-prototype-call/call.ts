/// 28. Для чего используется метод Function.prototype.call?

/// Call используется для привязки определенного объекта к значению this вызываемой функции.
/// Этот метод похож на Function.prototype.apply. Отличие состоит в том, что в call аргументы передаются через запятую.

const person = {
    name: 'Marko Polo'
};

function greeting(greetingMessage) {
    return `${greetingMessage} ${this.name}`;
}

greeting.call(person, 'Hello'); // Hello Marko Polo

