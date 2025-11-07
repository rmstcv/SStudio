import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}Цикл
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
Повторить блок вопросов с Q2 по Q3 включительно для каждого ответа Q1:
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
Добавляем в скрипт Подготовка
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
questions.repeat(2, 3, 1);
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Задать Q2 по ответам Q1:
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
Добавляем в скрипт Подготовка
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
questions.repeat(2, 2, 1);
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Не задавать Q для ответа 3:
${globalVars.textTagClose}
${globalVars.codeTagOpen}
if (Q.number % 100 == 3) return skip;
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Задать Q, если в Q2 выбран ответ 1
${globalVars.textTagClose}
${globalVars.codeTagOpen}
let Q2x = questions[200 + Q.number % 100];
if (!Q2x.isChecked(1)) return skip;
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Задать, если в любом из Q2x выбран ответ 5
${globalVars.textTagClose}
${globalVars.codeTagOpen}
for (let code of Q1.getCheckedCodes()) {
    let qn = 20 + code;
    if (!(qn in questions)) continue;

    if (questions[qn].isChecked(5)) return ok;
}

return skip;
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Цикл по невыбранным ответов
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
Добавляем в скрипт Подготовка
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
questions.repeatIfNot(2, 3, 1);
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Цикл по табличному вопросу
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
переносим необходимые ответы из табличного вопроса в обычный и создаём цикл по нему
${globalVars.textSubTagClose}
`;

let RepeatQuestions = {
    id: "RepeatQuestions",
    name: "Циклы",
    sub: "",
    descr: data_descr 
};

export { RepeatQuestions };