/// Что такое async/await?

/// Async/await — относительно новый способ написания асинхронного (неблокирующего) кода в JS. Им оборачивают промис. Он делает код более читаемым и чистым, чем промисы и функции обратного вызова. Однако для использования async/await необходимо хорошо знать промисы.

// / промис
// function callApi(){
//     return fetch('url/to/api/endpoint')
//     .then(resp => resp.json())
//     .then(data => {
//         // работаем с данными
//     }).catch(err => {
//         // работаем с ошибкой
//     })
// }

// // async/await
// // для перехвата ошибок используется try/catch
// async function callApi(){
//     try{
//         const resp = await fetch('url/to/api/endpoint')
//         const data = await res.json()
//         // работаем с данными
//     } catch(e){
//         // работаем с ошибкой
//     }
// }

/// Запомните: использование ключевого слова «async» перед функцией заставляет ее возвращать промис:

// const giveMeOne = async () = 1

// giveMeOne()
// .then((num) => {
//     console.log(num) // 1
// })


/// await robotayet tolko vnutri async function

