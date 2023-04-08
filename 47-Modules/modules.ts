/// Что такое модули (Modules)?

/// Модули позволяют объединять (использовать) код из разных файлов и избавляют нас от необходимости держать весь код в одном большом файле.
/// До появления модулей в JS существовало две популярные системы модулей для поддержки кода:

/// CommonJS — Nodejs
/// AMD (AsyncronousModuleDefinition) — Browsers


/// Синтаксис модулей очень простой: мы используем import для импорта функциональности или значений из другого файла или файлов и export для экспорта.

/// Экспорт функциональности в другой файл (именной экспорт):


// ES6 модули
export function isNull(val){
    return val === null;
}


// // ES5 CommonJS - index.js
// const helpers = require('./helpers.js')
// const isNull = helpers.isNull
// const isUndefined = helpers.isUndefined
// const isNullOrUndefined = helpers.isNullOrUndefined

// // либо с помощью деструктуризации
// const { isNull, isUndefined, isNullOrUndefined } = require('./helpers.js')

// // ES6 модули
// import * as helpers from './helpers.js' // helpers - это объект

// // либо
// import { isNull, isUndefined, isNullOrUndefined as isValid} from './helpers.js' // используем "as" для переименовывания




// ES5 CommonJS - index.js
// class Helpers {
//     static isNull(val){
//         return val === null
//     }

//     static isUndefined(val){
//         return val === undefined
//     }

//     static isNullOrUndefined(val){
//         return this.isNull(val) || this.isUndefined(val)
//     }
// }

// module.exports = Helpers

// // ES6 модули
// class Helpers {
//     static isNull(val){
//         return val === null
//     }

//     static isUndefined(val){
//         return val === undefined
//     }

//     static isNullOrUndefined(val){
//         return this.isNull(val) || this.isUndefined(val)
//     }
// }

// export default Helpers


// // ES5 CommonJS - index.js
// const Helpers = require('./helpers.js')
// console.log(Helpers.isNull(null))

// // ES6 модули
// import Helpers from './helpers.js'
// console.log(Helpers.isNull(null))

