import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Получить массив кодов категорий с открытыми значениями
${globalVars.titleTextTagClose}

${globalVars.codeTagOpen}
let opencodes = getArrOtherCodes(Q);
Q.answers.show(opencodes);
${globalVars.codeTagClose}
${globalVars.codeTagOpen}
function getArrOtherCodes(qTarget) {
    let openCodesArr = [];

    qTarget.answers.getAll().forEach((answer) => {
        let s = answer.settings;
        
        if (s && (s.openValueTxt || s.openValueNum || s.multilineTxt)) {
            openCodesArr.push(answer.code);
        }
    })
    return openCodesArr;
}
${globalVars.codeTagClose}
`;

let getArrOtherCodes = {
    id: "getArrOtherCodes",
    name: "getArrOtherCodes",
    sub: "",
    descr: data_descr 
};

export { getArrOtherCodes };