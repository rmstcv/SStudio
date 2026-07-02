import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Сохранить выбранные ответы (обязательно использовать, когда надо выбрать произвольно ответы, или замерить время)
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
Если скрытый вопрос, в скрипт перед показом добавить:
${globalVars.textTagClose}
${globalVars.codeTagOpen}
if (Q.isAnswered) return testAnswered(Q);
${globalVars.codeTagClose}${globalVars.textTagOpen} Еесли обычный вопрос, в скрипт перед показом добавить:
${globalVars.textTagClose}
${globalVars.codeTagOpen}
if (Q.isAnswered) return answered;
${globalVars.codeTagClose}
`;

let SaveAnswers = {
    id: "SaveAnswers",
    name: "Сохранить ответы",
    sub: "",
    descr: data_descr 
};

export { SaveAnswers };