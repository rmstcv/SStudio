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
${globalVars.textTagOpen}
Или вызвать в скрипте перед показом функцию:
${globalVars.textTagClose}
${globalVars.codeTagOpen}//функция показывает только те ответы, которые были выбраны в другом вопросе
//srcQ - вопрос, из которого копируются ответы
//trgQ - вопрос, в который копируются ответы
//objName - объект ('answers' или 'rows' или 'columns')
//exclude - массив с кодами ответов, которые не нужно копировать
//пример вызова - showCheckedAnswers(s1, Q, objName, [99])

//после вызова функции можно добавить - 
//if (Q[objName].visibleCount === 0) {return skip;}; //пропустить, если нет видимых
//Q[objName].show(99); //показать код 99

function showCheckedAnswers(srcQ, trgQ, objName, exclude = []) {
    let trg =  trgQ[objName];
    trg.hideAll();
    
    for (let answer of srcQ.getChecked()) {

        if (exclude.indexOf(answer.code) !== -1) continue;
        trg.show(answer.code);

        if (answer.flags & AnswerFlags.OpenValueTxt) {
            trg[answer.code].text = answer.openValueTxt;
        }
    }
}
${globalVars.codeTagClose}
`;

let ShowPrevChecked = {
    id: "ShowPrevChecked",
    name: "Перенос текста из «другого»",
    sub: "",
    descr: data_descr 
};

export { ShowPrevChecked };