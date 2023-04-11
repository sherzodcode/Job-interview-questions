/// Что такое параметры по умолчанию (Default Parameters)?

/// Это относительно новый способ определения значений переменных по умолчанию

// ES5
function adds(a,b){
    a = a || 0
    b = b || 0
    return a + b
}

// ES6
function add(a = 0, b = 0){
    return a + b
}
// если мы не присвоим переменным "a" и "b" какие-нибудь значения, они будут равняться 0
add(1) // 1



// function getFirst([first, ...rest] = [0, 1]){
//     return first
// }

// getFirst() // 0
// getFirst([10,20,30]) // 10

// function getArr({ nums } = { nums: [1,2,3,4] }){
//     return nums
// }

// getArr // [1,2,3,4]
// getArr({nums:[5,4,3,2,1]}) // [5,4,3,2,1]


///Мы даже можем использовать по умолчанию параметры, объявленные в том же месте


function doSomethingWithValue(value = 'Hello World', callback = () => { console.log(value) }){
    callback()
}
doSomethingWithValue() // Hello World