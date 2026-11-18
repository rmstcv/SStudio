import globalVars from "../../globalVars.js";


let data_descr = `${globalVars.titleTextTagOpen}
Текстовые поля
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
Реализовывается как Таблица: текст.
Скрипт после показа:
${globalVars.textTagClose}
${globalVars.codeTagOpen}
// В настройках ВАРИАНТОВ ОТВЕТОВ, кроме перовго поля, необходимо включить "Проверка ответа скриптами" (так отключится стандартная валидация заполнения выбранных полей)

// Или включить проверку ответов скриптами в настройках вопроса и добавить валидацию:
if (Q.rows[1].answer.openValueTxt === undefined || Q.rows[1].answer.openValueTxt === "") {
    return error('Первая строчка должна быть заполненна')
}
${globalVars.codeTagClose}
`;

let OpenTextsAndZO = {
    id: "OpenTextsAndZO",
    name: "Текстовые поля",
    sub: "",
    descr: data_descr 
};

export { OpenTextsAndZO };