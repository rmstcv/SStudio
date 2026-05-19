import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Замерить длительность:
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
Время начала в мс (вопрос t1):
${globalVars.textTagClose}
${globalVars.codeTagOpen}
if (Q.isAnswered) return testAnswered(Q);
Q.openValueInt = Date.now();    
return testAnswered(Q);
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Время окончания в (вопрос t2):
${globalVars.textTagClose}
${globalVars.codeTagOpen}
if (Q.isAnswered) return testAnswered(Q);
Q.openValueInt = Date.now();    
return testAnswered(Q);
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Длительность в (вопрос t3):
${globalVars.textTagClose}
${globalVars.codeTagOpen}
if (Q.isAnswered) return testAnswered(Q);
let duration = t2.answer.openValueInt - t1.answer.openValueInt;
Q.openValueInt = duration;
return testAnswered(Q);
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Длительность _м_с (вопрос t4):
${globalVars.textTagClose}
${globalVars.codeTagOpen}
if (Q.isAnswered) return testAnswered(Q);

let duration = t2.answer.openValueInt - t1.answer.openValueInt;
let seconds = Math.floor(duration / 1000);

Q.openValueTxt = (\`Длительность: \${Math.floor(seconds / 60)} мин \${seconds % 60} сек\`);

return testAnswered(Q);
${globalVars.codeTagClose}
${globalVars.titleTextTagOpen}
Как использовать тип вопроса Дата и Время:
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
Позволяет ввести или выбрать в календаре время или дату, или все вместе.
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
Независимо от языка опроса, дата и время всегда хранятся в системе в формате ДД.ММ.ГГГГ ЧЧ:ММ
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
if (Q1.openValueTxt == '21.12.2012 07:40') {
    // сделать что-то
}
${globalVars.codeTagClose}
${globalVars.textSubTagOpen}
Скриптом также можно переопределить значение по умолчанию, например:
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
Q.defaultValue = '22.11.1984 15:36';
${globalVars.codeTagClose}
`;

let DateAndTime = {
    id: "DateAndTime",
    name: "Дата и время",
    sub: "",
    descr: data_descr 
};

export { DateAndTime };