/// Почему в представленном коде переменная b становится глобальной при вызове функции?


// function myFunc(){
//     let a = b = 0
// }
// myFunc()
/// error


/// Так происходит, потому что оператор присваивания ("=") имеет правостороннюю ассоциативность, т.е. присваивает значения справа налево. Поэтому код принимает следующий вид:

// function myFunc(){
//     let a = (b = 0)
// }
// myFunc()

// /// function myFunc(){
//     let a = (b = 0)
// }
// myFunc()



/// Эту проблему можно решить сначала объявив локальные переменные, а затем присвоив им значения:

function myFunc(){
    let a, b
    a = b = 0
}
myFunc()



