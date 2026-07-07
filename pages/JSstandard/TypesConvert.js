import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.textTagOpen}В строку (String)
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}String(123)         // "123"
(123).toString()    // "123"
123 + ''            // "123"
\`\$\{123\}\`            // "123"
${globalVars.codeTextTagClose}
${globalVars.textTagOpen}В число (Number)
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}Number("123")       // 123
parseInt("123")     // 123
parseFloat("123.5") // 123.5
+"123"              // 123
"123" * 1           // 123
Number(true)        // 1
Number(false)       // 0
Number(null)        // 0
Number(undefined)   // NaN
${globalVars.codeTextTagClose}		
${globalVars.textTagOpen}В булевый (Boolean)
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}Boolean(1)          // true
Boolean(0)          // false
Boolean("hello")    // true
Boolean("")         // false
Boolean(null)       // false
Boolean(undefined)  // false
!!1                 // true (двойное отрицание)
!!0                 // false
${globalVars.codeTextTagClose}	
${globalVars.textTagOpen}Проверка типа
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}typeof 123          // "number"
typeof "123"        // "string"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object" (баг)
typeof []           // "object"
typeof {}           // "object"
Array.isArray([])   // true
Number.isNaN(NaN)   // true
Number.isInteger(5) // true
${globalVars.codeTextTagClose}	
${globalVars.textTagOpen}Автоматическое преобразование
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}// Строка + число = строка
"5" + 3             // "53"

// Число + строка = строка
5 + "3"             // "53"

// Математика → число
"5" - 3             // 2
"5" * "2"           // 10
"10" / 2            // 5

// Сравнение
5 == "5"            // true (нестрогое)
5 === "5"           // false (строгое)
${globalVars.codeTextTagClose}
${globalVars.textTagOpen}Проверка на NaN
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}
isNaN("abc")        // true
Number.isNaN(NaN)   // true (рекомендуется)
isNaN(null)         // false (null → 0)
${globalVars.codeTextTagClose}
${globalVars.textTagOpen}Отличие Number() от parseInt()
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}// Number() - НЕ терпит посторонних символов
Number("123abc")    // NaN 
Number("123.5abc")  // NaN 
Number("abc123")    // NaN 
Number("123 456")   // NaN 

// parseInt() - читает до первого нечислового символа
parseInt("123abc")  // 123 
parseInt("123.5")   // 123 (останавливается на точке) 
parseInt("123 456") // 123
parseInt("abc123")  // NaN  (начинается с буквы)

// Number() - сохраняет дробную часть
Number("123.456")   // 123.456 
Number("123.999")   // 123.999

// parseInt() - отбрасывает дробную часть (не округляет!)
parseInt("123.456") // 123
parseInt("123.999") // 123 (просто обрезает, не округляет)
parseInt("123.0")   // 123

// Оба игнорируют пробелы в начале и конце
Number("  123  ")   // 123
parseInt("  123  ") // 123

// Но Number() не терпит пробелы внутри
Number("123 456")   // NaN 
parseInt("123 456") // 123 

// Пустые строки и null
Number("")          // 0
Number(null)        // 0
Number(undefined)   // NaN

parseInt("")        // NaN
parseInt(null)      // NaN
parseInt(undefined) // NaN

//Когда что использовать

// Number() - когда нужна точная десятичная дробь
Number("123.456")   // 123.456

// parseInt() - когда нужно извлечь число из строки с текстом
parseInt("123px")   // 123
parseInt("123rem")  // 123

// parseInt(str, 10) - ВСЕГДА указывайте основание!
parseInt("010", 10) // 10, а не 8
parseInt("10", 10)  // 10

// parseInt() - НЕ для округления
Math.round(123.9)   // 124 (правильно)
parseInt(123.9)     // 123 (НЕ правильно!)

${globalVars.codeTextTagClose}
${globalVars.textTagOpen}Отличие String() от ().toString()
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}// String() - БЕЗОПАСНЫЙ, работает со всеми значениями
String(123)         // "123"
String(null)        // "null"
String(undefined)   // "undefined"
String(NaN)         // "NaN"

// .toString() - ОПАСНЫЙ, падает на null/undefined
(123).toString()    // "123"
null.toString()     // TypeError: Cannot read property 'toString' of null
undefined.toString() // TypeError: Cannot read property 'toString' of undefi

// Работа с числами

// Число как значение
const num = 123;
num.toString()      // "123" 

// Число напрямую (нужны скобки!)
123.toString()      // SyntaxError: Invalid or unexpected token
(123).toString()    // "123" 
123..toString()     // "123" (две точки, но некрасиво)

// String() - работает без скобок
String(123)         // "123" 
${globalVars.codeTextTagClose}
${globalVars.textTagOpen}Особенности для объектов
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}const obj = { a: 1 };

String(obj)          // "[object Object]"
obj.toString()       // "[object Object]"

// Массивы
String([1, 2, 3])    // "1,2,3"
[1, 2, 3].toString() // "1,2,3"

// Дата
String(new Date())   // "Fri Jul 08 2022 ..."
new Date().toString() // "Fri Jul 08 2022 ..."
${globalVars.codeTextTagClose}
`;

let TypesConvert = {
    id: "TypesConvert",
    name: "Преобразовать типы",
    sub: "",
    descr: data_descr 
};

export { TypesConvert };