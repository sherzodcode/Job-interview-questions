/// Что такое цель события или целевой элемент (event.target)?

/// Простыми словами, event.target — это элемент, в котором происходит событие, или элемент, вызвавший событие.
/// Имеем такую разметку:

// <div onclick="clickFunc(event)" style="text-align: center; margin: 15px;
// border: 1px solid red; border-radius: 3px;">
//     <div style="margin: 25px; border: 1px solid royalblue; border-radius: 3px;">
//         <div style="margin: 25px; border: 1px solid skyblue; border-radius: 3px;">
//             <button style="margin: 10px">
//                 Button
//             </button>
//         </div>
//     </div>
// </div>


// И такой простенький JS:

// function clickFunc(event) {
//     console.log(event.target)
// }

/// Мы прикрепили «слушатель» к внешнему div. Однако если мы нажмем на кнопку, то получим в консоли разметку этой кнопки. Это позволяет сделать вывод, что элементом,
/// вызвавшим событие, является именно кнопка, а не внешний или внутренние div.


