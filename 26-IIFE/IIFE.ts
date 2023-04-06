/// Что такое IIFE?

/// IIFE или Immediately Invoked Function Expression — это функция, которая вызывается или выполняется сразу же после создания или объявления. Для создания IIFE необходимо обернуть функцию в круглые скобки (оператор группировки), превратив ее в выражение, и затем вызвать ее с помощью еще одних круглых скобок. Это выглядит так: (function(){})().

/// IIFE или Immediately Invoked Function Expression — это функция, которая вызывается или выполняется сразу же после создания или объявления. Для создания IIFE необходимо обернуть функцию в круглые скобки (оператор группировки), превратив ее в выражение, и затем вызвать ее с помощью еще одних круглых скобок. Это выглядит так: (function(){})().

// (function( ) { }( ))

// (function( ) { })( )

// (function named(params) { })( )

// (( ) => { })

(function(global) { })(window)

const utility = (function( ) {
    return {
        // утилиты
    }
})


/// Все эти примеры являются валидными. Предпоследний пример показывает, что мы можем передавать параметры в IIFE. Последний пример показывает, что мы можем сохранить результат IIFE в переменной.

/// Лучшее использование IIFE — это выполнение функций настройки инициализации и предотвращение конфликтов имен с другими переменными в глобальной области видимости (загрязнение глобального пространства имен). Приведем пример.

