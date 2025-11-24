import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Многоответный вопрос с вводом числовых значений и валидацией суммы по строкам + ничего из перечисленного.
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
Реализовывается как многоответный вопрос с открытми значениями.
Скрипт после показа:
${globalVars.textTagClose}
${globalVars.codeTagOpen}
let total = 0
const exclAnswer = 99

for (let answer of Q.answers.getChecked()) { // по всем отмеченным
    let num = answer.openValueNum;

    total += num ? num : 0;
}

total = +total.toFixed(2);

if (!Q.answers[exclAnswer].checked) {
    
    if ((total != sum)) {
        return error('Сумма значений не равна ' + sum + '. Сейчас ' + total);
    }

    for (let answer of Q.answers.getChecked()) { // проверка что что то вписано если отмечен чек-бокс

        if (answer.openValueNum == undefined) {
            return error('Категория  \"' + answer.text + '\" выбрана, но в ней нет ответа.')
        }
    }
}
${globalVars.codeTagClose}
`;

let OpenTextsAndZO = {
    id: "OpenTextsAndZO",
    name: "Текстовые поля + ЗО",
    sub: "",
    descr: data_descr 
};

export { OpenTextsAndZO };