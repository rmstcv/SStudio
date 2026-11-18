import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Выбранные в b1 и не выбранные в b2
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
В скрипт перед показом добавить
${globalVars.textTagClose}
${globalVars.codeTagOpen}Q.answers.hideAll();

let b1Answers = b1.answers.getCheckedCodes();
let b2Answers = b2.answers.getCheckedCodes();
let qAnswers = Q.answers.getCodes();

for (let answer of b1Answers) { //отмеченные в b1
    
    if (answer === 99) continue;
    
    if (!b2.answers[answer].checked) { //и не отмеченные в b2
        Q.answers[answer].show();
    }
}

if (Q.answers.visibleCount > 0) {
    Q.answers[99].show();
} else {
    return skip
}
${globalVars.codeTagClose}
`;

let CheckInAndNotCheck = {
    id: "CheckInAndNotCheck",
    name: "Выбранные в.. и не Выбранные в..",
    sub: "",
    descr: data_descr 
};

export { CheckInAndNotCheck };