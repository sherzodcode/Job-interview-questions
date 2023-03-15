
//  What's the difference between NULL and UNDEFINED

// Для начала давайте поговорим о том, что у них общего.

//Во-первых, они принадлежат к 7 «примитивам» (примитивным типам) JS

let primitives: string[] = ["string", "number", "boolean", "null", "undefined", "symbol", "bigint"]

//Во-вторых, они являются ложными значениями, т.е. результатом их преобразования в логическое значение с помощью Boolean() или оператора "!!" является false:

console.log(!!null);             // false
console.log(!!undefined);        // false

console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false


// undefined («неопределенный») представляет собой значение по умолчанию:
// переменной, которой не было присвоено значения, т.е. объявленной, но не инициализированной переменной;
// функции, которая ничего не возвращает явно, например, console.log(1)
// несуществующего свойства объекта.    


let _thisIsUndefined
const doNothing = () => {}
const someObj = {
    a: 'ay',
    b: 'bee',
    c: 'si'
}
console.log(_thisIsUndefined) // undefined
console.log(doNothing()) // undefined
console.log(someObj['d']) // undefined




// null — это «значение отсутствия значения». null — это значение, которое присваивается переменной явно. В примере ниже мы получаем null, когда метод fs.readFile отрабатывает без ошибок

// fs.readFile('path/to/file', (e,data) => {
//     console.log(e);
//     if(e){
//         console.log(e);
//     }
//     console.log(data);
    
    
// })


// При сравнении null и undefined мы получаем true, когда используем оператор "==", и false при использовании оператора "==="

console.log(null == undefined);     //true
console.log(null === undefined);    //true

