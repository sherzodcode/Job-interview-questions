/// Почему результатом сравнения двух похожих объектов является false?


let a = {
    a: 1
}
let b = {
    a: 1
}
let c = a

console.log(a === b) // false
console.log(a === c) // true хм...


//// В JS объекты и примитивы сравниваются по-разному. Примитивы сравниваются по значению. Объекты — по ссылке или адресу в памяти, где хранится переменная. Вот почему первый console.log возвращает false, а второй — true. Переменные «a» и «c» ссылаются на один объект, а переменные «a» и «b» — на разные объекты с одинаковыми свойствами и значениями.

