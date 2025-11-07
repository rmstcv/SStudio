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
`;

let GetDateAndDay = {
    id: "GetDateAndDay",
    name: "Дата и день",
    sub: "",
    descr: data_descr 
};

export { GetDateAndDay };