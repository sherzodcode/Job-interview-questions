///   Как создать объект, не имеющий прототипа?

/// Это можно сделать с помощью Object.create:

const o1 = {}
console.log(o1.toString) // [object Object]

const o2 = Object.create(null) // в качестве первого параметра методу Object-create передается объект-прототип
// нам не нужен объект-прототип, поэтому передаем null
console.log(o2.toString) // o2.toString is not a function

