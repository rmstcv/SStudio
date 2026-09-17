import globalVars from "../../globalVars.js";

let data_descr = `
${globalVars.titleTextTagOpen}Перекодировка для сокращения числа категорий
(простой случай)
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
Q1 - вопрос (простой многоответный), в котором выбираем категории (большой список)
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
Список ответов = список Q1
${globalVars.textSubTagClose}
${globalVars.textTagOpen}
Q2 - вопрос (таблица: единственный выбор), в котором происходит перекодировка.
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
Список строк = спсисок Q2 (максимальное количество ответов, которым надо ограничиться).
Список ответов = список Q1
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}if (AnswerExistsAny(Q1, "99")) {
    return skip;
}

let allAnswersQ1 = Q1.answers.getCheckedCodes();
Q.columns.hideAll();
Q.rows.hideAll();

let iter = allAnswersQ1.length;

// ограничиваем количество ответов
if (iter > Q.rows.getAll().length) {
    iter = Q.rows.getAll().length;
}

// выбираем и показывем соответсвие. каждая строка соответсвует одному ответу из Q1.
// в дальнейшем по этому вопросу будем сопоставлять итерацию (в строке) и категорию (в столбце - один ответ)
for (let index = 1; index <= iter; index++) {
    let answerQ1 = allAnswersQ1[index - 1]
    
    Q.rows[index].answers[answerQ1].checked = true
    Q.columns[answerQ1].show();
    Q.rows[index].show();
}

return testAnswered(Q);
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Q3 - вопрос (простой многоответный), по которому будут задаваться вопросы цикла (проставляем в него все строки из Q2)
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
Список строк = спсисок Q2 (максимальное количество ответов, которым надо ограничиться).
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}if (AnswerExistsAny(Q1, "99")) {
    return skip
}

let objName = 'answers';

// отмечаем все возможные итерации (строки из Q2)
for (let A of Q2.rows.getAll()) {

    if (Q2.rows[A.code].getChecked().length > 0) {
        Q[objName][A.code].checked = true;
        Q[objName][A.code].text = Q2.rows[A.code].getChecked()[0].text;
    }
}

return testAnswered(Q);
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Далее задаем все вопросы цикла по Q3 (например, Q4 и Q5)
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
Скрипт подготовки анкеты перед запуском
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
questions.repeat(4, 5, 3);
${globalVars.codeTagClose}


${globalVars.titleTextTagOpen}Перекодировка для сокращения числа категорий
(cлучай, когда категории лежат внутри цикла)
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
1 qSingleCat
Выбираем в ручную категорию 
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}Q.answers.hideAll();
Q.answers.show(qAllAnswers.answers.getVisibleCodes());
${globalVars.codeTagClose}
${globalVars.textTagOpen}
2 qSingleCatAnswers
Вопрос в котором все ответы для отобранной категории 
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}let qSingleCat = qSingleCat.answers.getChecked()[0]; //выбраная одна
let qInIterCode = 2600 + qSingleCat.code; //категории из выбраной одной из вопроса (Q26), который задавался циклом по этой категории

copyAnswers(qInIterCode);
Q.answers.showOnly(Q.answers.getCheckedCodes());

if (Q.answers.getCheckedCodes().length < 1) {
    return skip;
}

return testAnswered(Q);
${globalVars.codeTagClose}
${globalVars.textTagOpen}
3 dummy_recode
Вопрос для рекода 
${globalVars.textTagClose}
${globalVars.textSubTagOpen}перекодированные категории (1-10) в строках, в столбцах - оригинальные
код 98 в столбце должен быть открытым - туда сохораним значение из оригинального вопроса
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}let mainIterAnswer = qSingleCatAnswers.answers.getChecked()[0]; // категория, которая нас инетересует
let qInIter = questions[2600 + mainIterAnswer.code]; // вопрос, который задавался циклом по этой категории
let qInIterAnswers = qSingleCatAnswers.getChecked(); // все ответы из вопроса (2600 + mainIterAnswer.code), который задавался циклом по этой категории

Q.rows.hideAll();
Q.columns.hideAll();

// идем по каждой coded категории до максимальной (длина массива всех категорий которые надо перекодировать)
// i - это номер новой coded категории, соответствует индексу оригинальной категории в массиве  с ответами с поправкой на - 1 (категории начинаются с 1 а не с 0 как массив)
for (let i = 1; i <= qInIterAnswers.length; i++) {
    let qInIterOneAnswer = qInIterAnswers[i - 1]; // берем ответ из qSingleCatAnswers
    let qInIterOneAnswerCode = qInIterOneAnswer.code;
    // проставляем и показываем ровно одну оригинальную категорию в столбец для каждой coded категории в строках
    Q.rows.show(i);
    Q.columns.show(qInIterOneAnswerCode);
    Q.rows[i].answers[qInIterOneAnswerCode].checked = true; //и ставим его в строку Q.rows[i]

    if (qInIter.answers[qInIterOneAnswerCode].flags & AnswerFlags.OpenValueTxt) {
        Q.rows[i].answers[qInIterOneAnswerCode].OpenValueTxt = qInIter.answers[qInIterOneAnswerCode].openValueTxt;
    }
}

if (Q.rows.getVisibleCodes().length < 1) {
    return skip;
}

return testAnswered(Q);
${globalVars.codeTagClose}
${globalVars.textTagOpen}
4 dummy_recode_iter
Вопрос для цикла 
${globalVars.textTagClose}
${globalVars.textSubTagOpen}только перекодированные категории (1-10)
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}let mainIterAnswer = qSingleCatAnswers.answers.getChecked()[0]; // категория, которая нас инетересует
let qInIter = questions[2600 + mainIterAnswer.code]; // вопрос, который задавался циклом по этой категории

Q.answers.hideAll();

dummy_recode.rows.getVisible().forEach((recodedRow) => {
    let recodedCol = recodedRow.answers.getChecked()[0]; // код колонки соотвествует оригинальному ответу
    let qInIterAns = qInIter.answers[recodedCol.code]; // для подстановки открытых
    let qAns = Q.answers[recodedRow.code]; 

    qAns.show();
    qAns.checked = true;
    qAns.text = recodedCol.text;
    
    if (qInIterAns.flags \& AnswerFlags.OpenValueTxt) {
       qAns.text = qInIterAns.openValueTxt;
    }
})

if (Q.answers.getVisibleCodes().length < 1) {
    return skip;
}

return testAnswered(Q);
${globalVars.codeTagClose}
`;

let Recode = {
    id: "Recode",
    name: "Перекодировка",
    sub: "",
    descr: data_descr 
};

export { Recode };