///  Что такое промисы (Promises)?

/// Промисы — это один из приемов работы с асинхронным кодом в JS. Они возвращают результат асинхронной операции. Промисы были придуманы для решения проблемы так называемого «ада функций обратного вызова»

// fs.readFile('somefile.txt', function(e, data){
//     if(e){
//         console.log(e)
//     }
//     console.log(data)
// })


/// Проблемы при таком подходе начинаются, когда нам необходимо добавить еще одну асинхронную операцию в первую (внутрь первой), затем еще одну и т.д. В результате мы получаем беспорядочный и нечитаемый код:


/// fs.readFile('somefile.txt', function(e,data){
    // код
//     fs.readFile('directory', function(e, files){
//         // код
//         fs.mkdir('directory', function(e){
//             // код
//         })
//     })
// })


// promReadFile('file/path')
// .then(data => {
//     return promReaddir('directory')
// })
// .then(data => {
//     return promMkdir('directory')
// })
// .catch(e => {
//     console.error(e)
// })



// У промиса есть четыре состояния:

// Ожидание — начальное состояние промиса. Результата промиса неизвестен, поскольку операция не завершена.
// Выполнено — асинхронная операция выполнена, имеется результат.
// Отклонено — асинхронная операция не выполнена, имеется причина.
// Завершено — выполнено или отклонено.

/// В качестве параметров конструктор промиса принимает resolve и reject. В resolve записывается результат выполнения операции, в reject — причина невыполнения операции. Результат может быть обработан в методе .then, ошибка — в методе .catch. Метод .then также возвращает промис, поэтому мы можем использовать цепочку, состоящую из нескольких .then.

// myPromiseAsync()
// .then(result => {
//     console.log(result)
// })
// .catch(reason => {
//     console.error(reason)
// })


// const toPromise = (asyncFuncWithCallback) => {
//     return (...args) => {
//         return new Promise((res, rej) => {
//             asyncFuncWithCallback(...args, (e, result) => {
//                 return e ? rej(e) : res(result)
//             })
//         })
//     }
// }

// const promiseReadFile = toPromise(fs.readFile)

// promiseReadFile('file/path')
// .then((data) => {
//     console.log(data)
// })
// .catch(e => console.error(e))


