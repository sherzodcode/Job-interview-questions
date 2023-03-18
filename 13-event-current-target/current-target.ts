/// Что такое текущая цель события (event.currentTarget)?

/// Event.currentTarget — это элемент, к которому прикреплен прослушиватель событий
/// Аналогичная разметка:



// <div onclick="clickFunc(event)" style="text-align: center;margin:15px;
// border:1px solid red;border-radius:3px;">
// <div style="margin: 25px; border:1px solid royalblue;border-radius:3px;">
//     <div style="margin:25px;border:1px solid skyblue;border-radius:3px;">
//         <button style="margin:10px">
//             Button
//         </button>
//     </div>
// </div>
// </div>


/// И немного видоизмененный JS:

// function clickFunc(event) {
//     console.log(event.currentTarget)
// }


/// Мы прикрепили слушатель к внешнему div. Куда бы мы ни кликнули, будь то кнопка или один из внутренних div, в консоли мы всегда получим разметку внешнего div. Это позволяет заключить, что event.currentTarget — это элемент, к которому прикреплен прослушиватель событий.



