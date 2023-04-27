///  Как в JS вызвать функцию?

/// Вызов в качестве функции. Если функция вызывается как метод, конструктор или с помощью методов apply или call, значит она вызывается как функция. Владельцем такой функции является объект window:

function add(a,b){
    console.log(this)
    return a + b
}

add(1,5) // window, 6

const o = {
    method(callback){
        callback()
    }
}

o.method(function(){
    console.log(this) // window
})


/// Вызов в качестве метода. Когда функция является свойством объекта, мы называем ее методом. Когда вызывается метод, значением this становится объект этого метода:

const details = {
    name: 'Marko',
    getName(){
        return this.name
    }
}

details.getName() // Marko, значением this является объект details



/// Вызов в качестве конструктора. Когда функция вызывается с использованием ключевого слова «new», мы называем такую функцию конструктором. При этом создается пустой объект, являющийся значением this:

// function Employee(name, position, yearHired){
//     // создается пустой объект, являющийся значением this
//     // this = {}
//     this.name = name
//     this.position = position
//     this.yearHired = yearHired
//     // наследование от Employee.prototype неявно возвращает this, если не указано иное
// }


/// const emp = new Employee('Marko Polo', 'Software Development', 2017)

//// Вызов с помощью методов apply или call. Мы используем эти методы, когда хотим явно определить значение this или владельца функции:


const obj1 = {
    result: 0
}

const obj2 = {
    result: 0
}

function reduceAdd(){
    let result = 0
    for(let i = 0, len = arguments.length; i < len; i++){
        result += arguments[i]
    }
    this.result = result
}

reduceAdd.apply(obj1, [1,2,3,4,5]) // значением this является obj1
reduceAdd.call(obj2, 1,2,3,4,5) // значением this является obj2


