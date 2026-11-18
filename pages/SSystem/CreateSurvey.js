import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Настройки анкеты
${globalVars.titleTextTagClose}
${globalVars.codeTextTagOpen}В свойствах анкеты:

Поставить чекбоксы:
✓ Автоматически формировать имена переменных в массиве
✓ Генерация переменных по шаблону вопроса

Дополнительно указать:
• Разделитель перед кодом ответа "."
• Разделитель перед кодом строки "_"
• Разделитель перед кодом ответа вопроса в цикле "_"
${globalVars.codeTextTagClose}
`;

let CreateSurvey = {
    id: "CreateSurvey",
    name: "Создать анкету",
    sub: "",
    descr: data_descr 
};

export { CreateSurvey };