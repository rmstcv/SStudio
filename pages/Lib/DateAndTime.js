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
${globalVars.titleTextTagOpen}
Определить день недели:
${globalVars.titleTextTagClose}
${globalVars.textSubTagOpen}
Категории в вопросе:
1	Понедельник
2	Вторник
3	Среда
4	Четверг
5	Пятница
6	Суббота
7	Воскресенье

Добавить в скрипт перед показом:
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
const date = new Date(); // Текущая дата
const dayOfWeek = date.getDay(); // 0 (воскресенье) до 6 (суббота)

switch (dayOfWeek) {
    case 0:
        day_of_the_week.answers[7].checked = true; // вс
        break;
    case 1:
        day_of_the_week.answers[1].checked = true; // пн
        break;
    case 2:
        day_of_the_week.answers[2].checked = true; // вт
        break;
    case 3:
        day_of_the_week.answers[3].checked = true; // ср
        break;
    case 4:
        day_of_the_week.answers[4].checked = true; // чт
        break;
    case 5:
        day_of_the_week.answers[5].checked = true; // пт
        break;
    case 6:
        day_of_the_week.answers[6].checked = true; // сб
        break;
    //default:
        //dayName = "Неизвестный день"; // На всякий случай
}

return testAnswered(Q)
${globalVars.codeTagClose}
`;

let DateAndTime = {
    id: "DateAndTime",
    name: "Дата и время",
    sub: "",
    descr: data_descr 
};

export { DateAndTime };