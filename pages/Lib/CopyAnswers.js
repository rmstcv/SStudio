import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Перенести (скопировать) ответы из одного вопроса с выбором в другой.
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
Скрипт перед показом перенесёт в текущий вопрос ответы из Q1 и Q7:
${globalVars.textTagClose}
${globalVars.codeTagOpen}
сopyAnswers(1, [97,99]); // кроме кодов 97 и 99
copyAnswers(7);
return Q.isAnswered ? answered : skip;

function copyAnswers(qn, except) {
    except = except === undefined ? [] : except;

    for (let A of questions[qn].getChecked()) {
        if (except.indexOf(A.code) > -1 || !(A.code in Q)) continue;

        let qA = Q[A.code];

        qA.checked = true;

        if (qA.flags & AnswerFlags.OpenValueNum) {
            qA.openValueNum = A.openValueNum;
        }

        if (qA.flags & AnswerFlags.OpenValueTxt) {
            qA.openValueTxt = A.openValueTxt;
        }
    }
}
${globalVars.codeTagClose}
`;

let CopyAnswers = {
    id: "CopyAnswers",
    name: "Перенести выбранные в..",
    sub: "",
    descr: data_descr 
};

export { CopyAnswers };