/// Что такое NaN? Как проверить, является ли значение NaN?

/// NaN или Not A Number (не число) — это значение, получаемое в результате выполнения числовой операции над нечисловым значением:


// console.log(parseInt('abc'))
// console.log(parseInt(null))
// console.log(parseInt(undefined))
// console.log(parseInt(++a))
// console.log(parseInt({} * 10))
// console.log(parseInt('abc' - 2))
// console.log(parseInt(0 / 0))
// console.log(parseInt('10a' * 10))


/// В JS есть встроенный метод isNaN, позволяющий проверять, является ли значение NaN, но он ведет себя довольно странно:

/// Результатом всех console.log является true, несмотря на то, что ни одно из значений не является NaN.

/// ES6 для проверки, является ли значение NaN, рекомендует использовать метод Number.isNaN. Мы также можем написать вспомогательную функцию для решения проблемы «неравенства NaN самому себе»:

