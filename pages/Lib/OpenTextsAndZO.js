import globalVars from "../../globalVars.js";


let data_descr = `${globalVars.titleTextTagOpen}
Текстовые поля + Затрудняюсь ответить
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
Реализовывается как Таблица: текст.
Скрипт после показа:
${globalVars.textTagClose}
${globalVars.codeTagOpen}
// В настройках вопроса необходимо включить "Проверка ответа скриптами" (так отключится стандартная валидация заполнения всех полей)

if (Q.rows[1].answer.openValueTxt === undefined || Q.rows[1].answer.openValueTxt === "") {
    return error('Первая строчка должна быть заполненна')
}
${globalVars.codeTagClose}
`;

let OpenTextsAndZO = {
    id: "OpenTextsAndZO",
    name: "Текстовые поля + ЗО",
    sub: "",
    descr: data_descr 
};

export { OpenTextsAndZO };