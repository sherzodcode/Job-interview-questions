/// Что такое прототип объекта?
/// В двух словах, прототип — это план (схема или проект) объекта. Он используется как запасной вариант для свойств и методов, существующих в данном объекте. Это также один из способов обмена свойствами и функциональностью между объектами. Это основная концепция прототипного наследования в JS

const o = {}
console.log(o.toString()) // [object Object]

/// Несмотря на то, что объект «о» не имеет свойства toString, обращение к этому свойству не вызывает ошибки. Если определенного свойства нет в объекте, его поиск осуществляется сначала в прототипе объекта, затем в прототипе прототипа объекта и так до тех пор, пока свойство не будет найдено. Это называется цепочкой прототипов. На вершине цепочки прототипов находится Object.prototype.

console.log(o.toString === Object.prototype.toString) // true
