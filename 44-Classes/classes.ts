/// Что такое классы (Classes)?

/// Классы — это относительно новый способ написания функций-конструкторов в JS
/// Это синтаксический сахар для функций-конструкторов. В основе классов лежат те же прототипы и прототипное наследование:

class Person{
    constructor(firstName, lastName, age, address){
        firstName
        lastName
        age
        address
    }

    static self(){
        return this
    }

    toString(){
        return '[object Person]'
    }

    getFullName(firstName, lastName){
        return  firstName + lastName
    }
}

// Переопределение методов и наследование от другого класса:

// class Employee extends Person{ // наследуемся от Person
//     constructor(firstName, lastName, age, address, jobTitle, yearStarted){
//         super(firstName, lastName, age, address)
//         this.jobTitle = jobTitle
//         this.yearStarted = yearStarted
//     }

//     describe(){
//        return `I am ${this.getFullName()} and I have a position of #{this.jobTitle} and I started at ${this.yearStarted}}` 
//     }

//     toString(){ // переопределяем метод toString класса Person
//         return '[object Employee]'
//     }
// }


/// Как узнать об использовании прототипов?


// class Something{ }

// function AnotherSomething(){ }

// const as = new AnotherSomething()
// const s = new Something()

// console.log(typeof Something) // function
// console.log(typeof AnotherSomething) // function
// console.log(as.toString()) // [object Object]
// console.log(a.toString()) // [object Object]
// console.log(as.toString === Object.prototype.toString)
// console.log(a.toString === Object.prototype.toString)
// // в обоих случаях получаем true
// // Object.prototype находится на вершине цепочки прототипов
// // Something и AnotherSomething наследуют от Object.prototype

