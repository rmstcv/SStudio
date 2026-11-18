import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Автоматически выбрать ответ и не задавать вопрос
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
Выбор видимого ответа (автоматически выбирать один ответ, который отображается):
${globalVars.textTagClose}
${globalVars.codeTagOpen}
Q.answers.showOnly(Q1.getCheckedCodes());

if (Q.answers.visibleCount == 2) { //Количество ответов, которые отображаются всегда + 1
    Q.answers.getVisible()[0].checked = true;

    return answered; // или return testAnswered(Q);
}

return Q.answers.visibleCount > 0 ? ok : skip;
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Выбор ответа, если выбран какой-то другой ответ:
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
автоматически выбрать ответ 3 и не задавать вопрос, если в q1 выбран ответ 2
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
if (q1.answers.isChecked(2)) {
    Q[3].checked = true;
    return answered; // или return testAnswered(Q);
}
${globalVars.codeTagClose}
`;

let AutoAnswer = {
    id: "AutoAnswer",
    name: "Авто выбор ответа",
    sub: "",
    descr: data_descr 
};

export { AutoAnswer };