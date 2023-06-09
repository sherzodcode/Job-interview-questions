/// Что такое распространение события (Event Propagation)?

/// Когда какое-либо событие происходит в элементе DOM, оно на самом деле происходит не только в нем
/// Событие «распространяется» от объекта Window до вызвавшего его элемента (event.target).
/// При этом событие последовательно пронизывает (затрагивает) всех предков целевого элемента.
/// Распространение события имеет три стадии или фазы:

/// 1- Фаза погружения (захвата, перехвата) — событие возникает в объекте Window и опускается до цели события через всех ее предков.
/// Целевая фаза — это когда событие достигает целевого элемента.
/// Фаза всплытия — событие поднимается от event.target, последовательно проходит через всех его предков и достигает объекта Window.

/// event.target будет содержать ссылку на конкретный элемент внутри формы, на котором произошёл клик.

/// Для этого нужно вызвать метод event.stopPropagation().

