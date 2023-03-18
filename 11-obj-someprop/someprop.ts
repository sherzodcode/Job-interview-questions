/// 

/// const obj = {}
/// console.log(obj.someprop.x)

/// Ответ очевиден: мы пытается получить доступ к свойству x свойства someprop, которое имеет значение undefined. obj.__proto__.__proto = null, поэтому возвращается undefined,
/// а у undefined нет свойства x.

