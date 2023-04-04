/// Что такое функции высшего порядка (Higher Order Functions)?

/// Функция высшего порядка — это функция, возвращающая другую функцию или принимающая другую функцию в качестве аргумента.

function higherOrderFunction(param, callback) {
    return callback(param)
}

