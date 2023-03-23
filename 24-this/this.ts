/// Какое значение имеет this?

/// Обычно this ссылается на значение объекта, который в данный момент выполняет или вызывает функцию. «В данный момент» означает, что значение this меняется в зависимости от контекста выполнения, от того места, где мы используем this.

const carDetails = {
    name: 'Ford Mustang',
    yearBought: 2005,
    getName() {
        return this.name
    },
    isRegistered: true
}

console.log(carDetails.getName()) // Ford Mustang


/// В данном случае метод getName возвращает this.name, а this ссылается на carDetails, объект, в котором выполняется getName, который является ее «владельцем»

var carName = 'Ford Ranger'
var getCarName = carDetails.getName

// console.log(getCarName()) // Ford Ranger


// (function() {
//     console.log(this)
// })() // window

function iHateThis() {
    console.log(this)
}
iHateThis() // window

const myFavouriteObj = {
    guessThis() {
        function getName() {
            console.log(this.name)
        }
        getName()
    },
    name: 'Marko Polo',
    thisIsAnnoying(callback) {
        callback()
    }
}

myFavouriteObj.guessThis() // window
myFavouriteObj.thisIsAnnoying(function() {
    console.log(this) // window
})

// Существует два способа получить «Marko Polo».

// Во-первых, мы можем сохранить значение this в переменной:

const myFavoriteObj = {
    guessThis() {
        const self = this // сохраняем значение this в переменной self
        function getName() {
            console.log(self.name)
        }
        getName()
    },
    name: 'Marko Polo',
    thisIsAnnoying(callback) {
        callback()
    }
}

// Во-вторых, мы можем использовать стрелочную функцию:

// const myFavoriteObj = {
//     guessThis() {
//         const getName = () => {
//             // копируем значение this из внешнего окружения
//             console.log(this.name)
//         }
//         getName()
//     },
//     name: 'Marko Polo',
//     thisIsAnnoying(callback) {
//         callback()
//     }
// }


/// Стрелочные функции не имеют собственного значения this. Они копируют значение this из внешнего лексического окружения.

