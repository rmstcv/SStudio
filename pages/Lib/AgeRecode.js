import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Перекодировка возраста
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
В скрипт после показа вопроса S2 с возрастом добавить
${globalVars.textTagClose}
${globalVars.codeTagOpen}
let age = S2.openValueInt;
if (age < 20 || age > 60) return screenOut();
${globalVars.codeTagClose}${globalVars.textTagOpen}В скрипт перед показом в вопрос s2_recode добавить
${globalVars.textTagClose}
${globalVars.codeTagOpen}
let age = S2.openValueInt;

Q[1].checked = age <= 19;
Q[2].checked = age >= 20 && age <= 29;
Q[3].checked = age >= 30 && age <= 39;
Q[4].checked = age >= 40 && age <= 49;
Q[5].checked = age >= 50 && age <= 60;
Q[6].checked = age >= 61;

return testAnswered(Q);
${globalVars.codeTagClose}
`;

let AgeRecode = {
    id: "AgeRecode",
    name: "Перекодировка возраста",
    sub: "",
    descr: data_descr 
};

export { AgeRecode };