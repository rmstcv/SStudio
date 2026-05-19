import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.textTagOpen}Получить дату
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}const d = new Date();
(new Date()).getTime()
const year  = d.getFullYear(); // год, напр. 2025
const month = d.getMonth() + 1; // месяц 1–12 (getMonth() возвращает 0–11)
const day   = d.getDate(); // число месяца 1–31
const hours = d.getHours(); // часы 0–23
const mins  = d.getMinutes(); // минуты 0–59
const secs  = d.getSeconds(); // секунды 0–59
const dayOfWeek = date.getDay(); // 0 (воскресенье) до 6 (суббота)

${globalVars.codeTextTagClose}		
${globalVars.codeTextTagOpen}const d = new Date();
(new Date()).getTime()
const year  = d.getFullYear(); // год, напр. 2025
const month = d.getMonth() + 1; // месяц 1–12 (getMonth() возвращает 0–11)
const day   = d.getDate(); // число месяца 1–31
const hours = d.getHours(); // часы 0–23
const mins  = d.getMinutes(); // минуты 0–59
const secs  = d.getSeconds(); // секунды 0–59
const dayOfWeek = date.getDay(); // 0 (воскресенье) до 6 (суббота)

${globalVars.codeTextTagClose}		
${globalVars.codeTextTagOpen}const timestamp = Date.now();
console.log(timestamp); // 1747657845123 (миллисекунды с 1 января 1970)
console.log(typeof timestamp); // "number"

// Нельзя использовать методы даты
// timestamp.getHours() Ошибка!

// Нужно создать объект из timestamp
const dateFromTimestamp = new Date(timestamp);
console.log(dateFromTimestamp.getHours()); // 15

${globalVars.codeTextTagClose}
${globalVars.textTagOpen}Получение timestamp из Date.now() и new Date():
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}// Способ 1: Date.now() - напрямую
const ts1 = Date.now();

// Способ 2: из объекта Date
const ts2 = new Date().getTime();

// Способ 3: из объекта Date (альтернативный)
const ts3 = +new Date();

console.log(ts1 === ts2); // true (оба метода дают одинаковый результат)

${globalVars.codeTextTagClose}		
`;

let GetDateAndDay = {
    id: "GetDateAndDay",
    name: "Дата и время",
    sub: "",
    descr: data_descr 
};

export { GetDateAndDay };