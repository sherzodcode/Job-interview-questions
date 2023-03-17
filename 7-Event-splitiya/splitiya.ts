/// Что такое всплытие события?

/// Когда событие происходит в элементе DOM, оно затрагивает не только этот элемент. Событие «всплывает» (подобно пузырьку воздуха в воде), переходит от элемента, вызвавшего событие (event.target), к его родителю, затем поднимается еще выше, к родителю родителя элемента, пока не достигает объекта Window.

/// Допустим, у нас есть такая разметка:



// <div class="grandparent">
//     <div class="parent">
//         <div class="child">1</div>
//     </div>
// </div>


// И такой JS

function addEvent(el, event, callback, isCapture = false) {
    if (!el || !event || !callback || typeof callback !== 'function') return

    if (typeof el === 'string') {
        el = document.querySelector(el)
    }
    el.addEventListener(event, callback, isCapture)
}

addEvent(document, 'DOMContentLoaded', () => {
    const child = document.querySelector('.child')
    const parent = document.querySelector('.parent')
    const grandparent = document.querySelector('.grandparent')

    addEvent(child, 'click', function(e) {
        console.log('child')
    })

    addEvent(parent, 'click', function(e) {
        console.log('parent')
    })

    addEvent(grandparent, 'click', function(e) {
        console.log('grandparent')
    })

    addEvent('html', 'click', function(e) {
        console.log('html')
    })

    addEvent(document, 'click', function(e) {
        console.log('document')
    })

    addEvent(window, 'click', function(e) {
        console.log('window')
    })
})


/// У метода addEventListener есть третий необязательный параметр — useCapture
/// Когда его значение равняется false (по умолчанию), событие начинается с фазы всплытия
/// Когда его значение равняется true, событие начинается с фазы погружения (для «прослушивателей» событий, прикрепленных к цели события, событие находится в целевой фазе, а не в фазах погружения или всплытия
/// События в целевой фазе инициируют все прослушиватели на элементе в том порядке, в котором они были зарегистрированы независимо от параметра useCapture
///  Если мы кликнем по элементу child, в консоль будет выведено: child, parent, grandparent, html, document, window. Вот что такое всплытие события.
