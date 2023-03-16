//// 3. Для чего используется оператор "||"?

//Оператор "||" (логическое или) находит и возвращает первое истинное значение. Он также использует короткое замыкание. Данный оператор использовался для присвоения параметров по умолчанию в функциях до того, как параметры по умолчанию были стандартизированы в ES6.


// Bu 'mantiqiy yoki' operatori birinci haqiqiy qiymatni qaytaradi



console.log(null || 1 || undefined); // 1


// null true emas. 1 true. undefined true emas. 1 qaytadi

function longName(name) {
    let n = name || "Mark"

    console.log(n);
}



longName(undefined) //  Mark


// agarda funksiya parametrida berilgan qiymat undefined bolsa bu false deb hisblanadi a funksiya boyicha Mark logga ciqadi






