import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Выводить указанное в предыдущем вопросе количество строк таблицы
${globalVars.titleTextTagClose}
${globalVars.textSubTagOpen}
Q1 - числовой вопрос, следующий - табличный с максимально необходимым количеством строк (коды значения не имеют). 
В нём скрипт перед показом:
${globalVars.texttextSubTagOpenTagClose}
${globalVars.codeTagOpen}
let num = Q1.openValueInt;
let rowCodes = Q.rows.getCodes();

Q.rows.hideAll();

for (let i = 0, max = rowCodes.length; i < num && i < max; i++) {
    Q.rows.show(rowCodes[i]);
}

return Q.rows.hasVisible ? ok : skip;
${globalVars.codeTagClose}
`;

let ShownRowsInTable = {
    id: "ShownRowsInTable",
    name: "Показать N строк",
    sub: "",
    descr: data_descr 
};

export { ShownRowsInTable };