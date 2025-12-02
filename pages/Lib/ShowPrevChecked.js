import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Показать выбранные в предыдущем вопросе ответы с переносом текста из «другого».
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
Q1 - вопрос с выбором, некоторые ответы содержат текстовые поля. В следующем вопросе должен быть такой же список ответов, но без текстовых полей, и скрипт перед показом:
${globalVars.textTagClose}
${globalVars.codeTagOpen}
// можно менять на 'rows' или 'columns' в зависимости от того, что нужно показать
let objName = 'answers';

Q[objName].hideAll();

for (let A of Q1.getChecked()) {
    Q[objName].show(A.code);

    if (A.flags & AnswerFlags.OpenValueTxt) {
        Q[objName][A.code].text = A.openValueTxt;
    }
}

return Q[objName].visibleCount > 0 ? ok : skip;
${globalVars.codeTagClose}
`;

let ShowPrevChecked = {
    id: "ShowPrevChecked",
    name: "Перенос текста из «другого»",
    sub: "",
    descr: data_descr 
};

export { ShowPrevChecked };