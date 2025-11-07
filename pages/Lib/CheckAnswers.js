import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Найти выбранные варианты ответа
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
Если вариантов ответов для проверки не много, можно использовать стандартный метод:
${globalVars.textTagClose}
${globalVars.codeTagOpen}
if (q1_1.answers.isChecked(1)) {} // если в вопросе q1_2 выбран вариант 1..
if (q1_2.answers[2].checked) {} // если в вопросе q1_1 выбран вариант 2..
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Если вариантов ответов для проверки много, можно использовать функцию AnswerExistsAny (вопрос, "коды"):
${globalVars.textTagClose}
${globalVars.codeTagOpen}
if (AnswerExistsAny(q1_3, "98,99")) {
    return skip
}
${globalVars.codeTagClose}
`;

let CheckAnswers = {
    id: "CheckAnswers",
    name: "Выбранные ответы..",
    sub: "",
    descr: data_descr 
};

export { CheckAnswers };