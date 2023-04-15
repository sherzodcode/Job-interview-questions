/// Как в JS создать объект?

const o = {
    name: 'Mark',
    greeting(){
        return `Hi, I'm ${this.name}`
    }
}

o.greeting // Hi, I'm Mark

/// Функция-конструктор:

function Person(name){
    this.name = name
}

Person.prototype.greeting = function(){
    return `Hi, I'm ${this.name}`
}

const mark = new Person('Mark')

mark.greeting() // Hi, I'm Mark


/// Метод Object.create:

const n = {
    greeting(){
        return `Hi, I'm ${this.name}`
    }
}


// const o = Object.create(n)

o.name = 'Mark'

console.log(o.greeting) // Hi, I'm Mark

