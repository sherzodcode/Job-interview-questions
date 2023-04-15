/// В чем разница между обычной функцией и функциональным выражением?
/// Допустим, у нас есть следующее:

hoistedFunc()
notHoistedFunc()

function hoistedFunc(){
    console.log('I am hoisted')
}

var notHoistedFunc = function(){
    console.log('I will not be hoisted!')
}


/// Вызов notHoistedFunc приведет к ошибке, а вызов hoistedFunc нет, потому что hoistedFunc «всплывает», поднимается в глобальную область видимости, а notHoistedFunc нет.
