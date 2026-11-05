import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Перекодировка города
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
В скрипт после показа вопроса s3 с городами добавить
${globalVars.textTagClose}
${globalVars.codeTagOpen}
if (Q.answers.isChecked(9999)) {
    return screenOut();
} 
${globalVars.codeTagClose}${globalVars.textTagOpen}В скрипт перед показом в вопрос s3_recode добавить
${globalVars.textTagClose}
${globalVars.codeTagOpen}
let s3Answer = s3.answers.getCheckedCodes()[0];

if (Q.answers.getCodes().indexOf(s3Answer) !== -1) {
    Q.answers[s3Answer].checked = true;
}

if (Q.answers.getCheckedCodes().length === 0 || s3Answer === 9999) {
    Q.answers[9999].checked = true;
}

return testAnswered(Q);
${globalVars.codeTagClose}${globalVars.textTagOpen}
В скрипт после показа вопроса s3 с городами добавить
${globalVars.textTagClose}
${globalVars.codeTagOpen}
if (Q.answers.isChecked(9999)) {
    return screenOut();
}
${globalVars.codeTagClose}
`;

let CityRecode = {
    id: "CityRecode",
    name: "Перекодировка города",
    sub: "",
    descr: data_descr 
};

export { CityRecode };