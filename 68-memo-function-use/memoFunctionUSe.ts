/// . Как бы Вы реализовали вспомогательную функцию запоминания?


function memoize(fn){
    const cache = {}
    return function(param){
        if(cache[param]){
            console.log('cached')
            return cache[param]
        } else{
            let result = fn(param)
            cache[param] = result
            console.log('not cached')
            return result
        }
    }
}

const toUpper = (str = '') => str.toUpperCase()

const toUpperMemoized = memoize(toUpper)

toUpperMemoized('abcdef')
toUpperMemoized('abcdef') // не выполнится


/// Мы реализовали функцию мемоизации с одним аргументом. Сделаем ее «мультиаргументной»

    // const slice = Array.prototype.slice
    // function memoize(fn){
    //     const cache = {}
    //     return (...args) => {
    //         const params = slice.call(args)
    //         console.log(params)
    //         if(cache[params]){
    //             console.log('cached')
    //             return cache[params]
    //         } else{
    //             let result = fn(...args)
    //             cache[params] = result
    //             console.log('not cached')
    //             return result
    //         }
    //     }
    // }
    // const makeFullName = (fName, lName) => `${fName} ${lName}`
    // const reduceAdd = (numbers, startValue = 0) => numbers.reduce((total, cur) => total + cur, startValue)

    // const memoizedFullName = memoize(makeFullName)
    // const memoizeReduceAdd = memoize(reduceAdd)

    // memoizedFullName('Marko', 'Polo')
    // memoizedFullName('Marko', 'Polo') // не выполнится

    // memoizeReduceAdd([1,2,3,4],5)
    // memoizeReduceAdd([1,2,3,4],5) // не выполнится