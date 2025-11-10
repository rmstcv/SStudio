import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Показать ответы или строки, для которых в строках табличного вопроса выбраны ответы с кодом 1 или 3
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
Q1 - табличный вопрос с выбором. 
В следующем вопросе должен быть такой же список ответов или строк и скрипт перед показом:
${globalVars.textTagClose}
${globalVars.codeTagOpen}
// можно менять на 'answers' или 'columns' в зависимости от того, что нужно показать
let objName = 'rows';

Q[objName].hideAll();

for (let row of Q1.rows.getVisible()) {
    if ( [1,3].some(code => row.isChecked(code)) ) {
        Q[objName].show(row.code);
    }
}

return Q[objName].visibleCount > 0 ? ok : skip;
${globalVars.codeTagClose}
`;

let ShowRowsConditions = {
    id: "ShowRowsConditions",
    name: "Показать строки по условию",
    sub: "",
    descr: data_descr 
};

export { ShowRowsConditions };