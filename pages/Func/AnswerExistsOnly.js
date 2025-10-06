import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Проверить, если в вопросе отмеченны только определенные коды
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
В качестве второго аргумента функция принимает массив кодов
${globalVars.textTagClose}
${globalVars.codeTagOpen}
if (AnswerExistsOnly(Q, [96,97,98,99])) { // если отмечены только коды 96,97,98,99 в Q
    return question(Q2.number);
}
${globalVars.codeTagClose}
${globalVars.codeTagOpen}
function AnswerExistsOnly(qTarget, arrCodes) {
    let qTargetAnswerCodes = qTarget.answers.getCheckedCodes();

     if (!qTargetAnswerCodes || qTargetAnswerCodes.length === 0 || arrCodes.length === 0) {
        return false;
    }
    
    for (let i = 0; i < qTargetAnswerCodes.length; i++) {
      let answer = qTargetAnswerCodes[i];
      if (arrCodes.indexOf(answer) === -1) { 
        return false;
      }
    }
    return true;
}
${globalVars.codeTagClose}
`;

let AnswerExistsOnly = {
    id: "AnswerExistsOnly",
    name: "Показать выбранные в..",
    sub: "",
    descr: data_descr 
};

export { AnswerExistsOnly };