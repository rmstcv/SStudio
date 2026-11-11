import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Проверить, если в вопросе отмечены только определенные коды
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
В качестве второго аргумента функция принимает массив кодов
${globalVars.textTagClose}
${globalVars.codeTagOpen}
if (answerExistsOnly(Q, [96,97,98,99])) { // если отмечены только коды 96,97,98,99 в Q
    //to do something
}
${globalVars.codeTagClose}
${globalVars.codeTagOpen}
function answerExistsOnly(qTarget, arrCodes) {
    let checked = qTarget.answers.getCheckedCodes();

    if (!checked || checked.length === 0) {
        return false;  // ← или true, если пустой выбор считается «ок»
    }

    return checked.every(code => arrCodes.indexOf(code) !== -1);
}
${globalVars.codeTagClose}
`;

let AnswerExistsOnly = {
    id: "AnswerExistsOnly",
    name: "AnswerExistsOnly",
    sub: "",
    descr: data_descr 
};

export { AnswerExistsOnly };