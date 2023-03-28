/// 29. В чем разница между методами call и apply?
/// 
/// Отличие между call и apply состоит в том, как мы передаем аргументы в вызываемой функции. В apply аргументы передаются в виде массива, в call — через запятую.

const obj1 = {
    result: 0
}

const obj2 = {
    result: 0
}

function reduceAdd() {
    let result = 0
    for (let i = 0, len = arguments.length; i < len; i++) {
        result += arguments[i]
    }
    this.result = result
}

reduceAdd.apply(obj1, [1, 2, 3, 4, 5]) // 15
reduceAdd.call(obj2, 1, 2, 3, 4, 5) // 15


