/// Для чего используется ключевое слово «new»?

/// Ключевое слово «new» используется в функциях-конструкторах для создания нового объекта (нового экземпляра класса).

///Допустим, у нас есть такой код:

function Employee(name, position, yearHired){
    this.name = name
    this.position = position
    this.yearHired = yearHired
}

const emp = new Employee('Marko Polo', 'Software Development', 2017)


/// Ключевое слово «new» делает 4 вещи:

// Создает пустой объект.
// Привязывает к нему значение this.
// Функция наследует от functionName.prototype.
// Возвращает значение this, если не указано иное.

