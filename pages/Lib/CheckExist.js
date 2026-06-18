import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Проверить существование
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
Проверка, что вариант ответа существует в вопросе
${globalVars.textTagClose}
${globalVars.codeTagOpen}
for (let code of questions[qn].getChecked()) {
    if !(A.code in Q)) continue;
        // do something
}
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Проверка параметра
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
Проверить, что параметр передан
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
function someFunc(qn, except) {
    except = except === undefined ? [] : except;
}

${globalVars.textSubTagOpen}
или except || [] - заменит ЛЮБОЕ falsy значение (null, undefined, 0, false, '', NaN)
${globalVars.textSubTagClose}

function someFunc(qn, except) {
    except = except || [];
}
${globalVars.codeTagClose}
${globalVars.textSubTagOpen}
Передать параметр со значением по умолчанию (можно не передавать)
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
function someFunc(qn, except = []) {
}
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Проверка, что в вопросе есть видимые варианты ответа
${globalVars.textTagClose}
${globalVars.codeTagOpen}
return Q.answers.visibleCount > 0 ? ok : skip;
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Проверка, что в массиве except есть код answer.code
${globalVars.textTagClose}
${globalVars.codeTagOpen}
if (except.indexOf(answer.code) > -1 continue;
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Проверка, что в массиве except есть код answer.code, и что answer.code существует в вопросе 
${globalVars.textTagClose}
${globalVars.codeTagOpen}
if (except.indexOf(answer.code) > -1 || !(answer.code in Q)) continue;
${globalVars.codeTagClose}
`;

let CheckExist = {
    id: "CheckExist",
    name: "Проверить существование",
    sub: "",
    descr: data_descr 
};

export { CheckExist };