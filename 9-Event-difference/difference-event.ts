/// В чем разница между методами event.preventDefault() и event.stopPropagation()?

/// Метод event.preventDefault() отключает поведение элемента по умолчанию
/// Если использовать этот метод в элементе form, то он предотвратит отправку формы (submit)
/// Если использовать его в contextmenu, то контекстное меню будет отключено (данный метод часто используется в keydown для переопределения клавиатуры, например, при создании музыкального/видео плеера или текстового редактора — прим. пер.)

/// Метод event.stopPropagation() отключает распространение события (его всплытие или погружение)


