/// Для чего используется оператор "&&"?

// Оператор "&&" (логическое и) находит и возвращает первое ложное значение либо последний операнд, когда все значения истинные. 
// Он использует короткое замыкание во избежание лишних затрат:





console.log(false && 1 && []); // false
console.log('' && true && 5);  //  5



// С оператором «if»:

// const router: Router = Router()

// router.get('/endpoint', (req: Request, res: Response) => {
//     let conMobile: PoolConnection
//     try {
//         // операции с базой данных
//     } catch (e) {
//         if (conMobile) {
//             conMobile.release()
//         }
//     }
// })



// То же самое с оператором "&&":

// const router: Router = Router()

// router.get('/endpoint', (req: Request, res: Response) => {
//     let conMobile: PoolConnection
//     try {
//         // операции с базой данных
//     } catch (e) {
//         conMobile && conMobile.release()
//     }
// })



