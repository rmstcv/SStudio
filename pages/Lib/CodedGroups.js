import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Кодирование группы по ответу (кодирование страт)
${globalVars.titleTextTagClose}
${globalVars.textSubTagOpen}
В Q2 добавить скрипт перед показом:
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
Q.reset()

let code = Q1.getCheckedCode(); // ответ, выбранный в Q1, который нужно отнести в группу

let groups = {
    1: [1, 2, 3], // коды относящиеся к группе 1
    2: [4, 5, 6], // коды относящиеся к группе 2
    // заполните далее ... 
} 

for (let group in groups) { // по каждой группе из списка
    if (groups[group].indexOf(code) == -1) continue; // если код не входит в группу - проверим следующую 

    Q[group].checked = true; // раз мы здесь - значит группа нам подходит, отметим ее
    
    return answered; // считаем вопрос отвеченным
}

Q.comment = 'ВНИМАНИЕ! Не удалось автоматичеки определить ответ для кода ' + code;
${globalVars.codeTagClose}
`;

let CodedGroups = {
    id: "CodedGroups",
    name: "Кодирование группы по ответу",
    sub: "",
    descr: data_descr 
};

export { CodedGroups };