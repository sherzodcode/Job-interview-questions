/// В чем разница между операторами "==" и "==="?

/// Разница между оператором "==" (абстрактное или нестрогое равенство) и оператором "===" (строгое равенство) состоит в том, что первый сравнивает значения после их преобразования или приведения к одному типу (Coersion), а второй — без такого преобразования.

/// Преобразование представляет собой процесс приведения значения к другому типу или, точнее, процесс приведения сравниваемых значений к одному типу. При сравнении оператор "==" производит так называемое неявное сравнение. Оператор "==" выполняет некоторые операции перед сравнением двух значений.

/// Алгоритм следующий:




// Если x и y имеют одинаковый тип, сравнение выполняется с помощью оператора "===".
// Если x = null и y = undefined возвращается true.
// Если x = undefined и y = null возвращается true.
// Если x = число, а y = строка, возвращается x == toNumber(y) (значение y преобразуется в число).
// Если x = строка, а y = число, возвращается toNumber(x) == y (значение x преобразуется в число).
// Если x = логическое значение, возвращается toNumber(x) == y.
// Если y = логическое значение, возвращается x == toNumber(y).
// Если x = строка, символ или число, а y = объект, возвращается x == toPrimitive(y) (значение y преобразуется в примитив).
// Если x = объект, а y = строка, символ или число, возвращается toPrimitive(x) == y.
// Возвращается false.


///Запомните: для приведения объекта к «примитиву» метод toPrimitive сначала использует метод valueOf, затем метод toString.

