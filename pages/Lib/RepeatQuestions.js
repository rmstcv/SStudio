import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}Цикл
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
Повторить блок вопросов с Q2 по Q3 включительно для каждого ответа Q1:
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
Добавляем в скрипт Подготовка
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
questions.repeat(2, 3, 1);
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Задать Q2 по ответам Q1:
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
Добавляем в скрипт Подготовка
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
questions.repeat(2, 2, 1);
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Не задавать Q для ответа 3:
${globalVars.textTagClose}
${globalVars.codeTagOpen}
if (Q.number % 100 == 3) return skip;
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Задать Q, если в Q2 выбран ответ 1
${globalVars.textTagClose}
${globalVars.codeTagOpen}
let Q2x = questions[200 + Q.number % 100];
if (!Q2x.isChecked(1)) return skip;
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Задать, если в любом из Q2x выбран ответ 5
${globalVars.textTagClose}
${globalVars.codeTagOpen}
for (let code of Q1.getCheckedCodes()) {
    let qn = 20 + code;
    if (!(qn in questions)) continue;

    if (questions[qn].isChecked(5)) return ok;
}

return skip;
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Цикл по невыбранным ответам
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
Добавляем в скрипт Подготовка
(В настройках вопроса: Условие показа = false)
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
questions.repeatIfNot(2, 3, 1);
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Цикл по табличному вопросу
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
переносим необходимые ответы из табличного вопроса в обычный и создаём цикл по нему
${globalVars.textSubTagClose}
${globalVars.textTagOpen}
sourceAnswerCode
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
Для вопросов внутри цикла - код варианта ответа по которому создан (задаётся) этот вопрос цикла.
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
if (Q.sourceAnswerCode == 1) Q.hideFromTo(1, 5); // если вопрос задаётся по ответу с кодом 1 - скрыть ответы с 1 по 5  
${globalVars.codeTagClose}
${globalVars.textTagOpen}
sourceQuestionNumber
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
Для вопросов внутри цикла - исходный номер вопроса из которого создан этот вопрос цикла.
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
if (Q.sourceQuestionNumber == 10 || Q.sourceQuestionNumber == 11) { // для вопросов 10 & 11 расположенный в цикле
    let condition = Q9.isChecked(1);  // дополнительное условие - в Q9 должен быть отмечен 1
    return condition ? ok : skip;  // условие выполняется ? задать : иначе пропустить 
}
${globalVars.codeTagClose}
${globalVars.textTagOpen}
currentIterationQuestions
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
Для вопросов внутри цикла - ссылки на другие вопросы находящиеся в этой же итерации цикла. Ключом будет номер исходного вопроса.

Пример: В Q1 ответы с кодами 1, 2, 3.
По ответам из Q1 повторяются вопросы с Q2 по Q4 (цикл): questions.repeat(1, 2, 4);
В вопросе Q3 можно получить ссылки на соседние вопросы Q2 и Q4 которые задаются по такому же коду ответа (в этой же итерации):
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
let q2 = Q.currentIterationQuestions[2]; // вопрос Q2 в этой итерации 
if (q2.isChecked(1)) return skip; // если в вопросе Q2 был выбран ответ 1 - пропустить вопрос
${globalVars.codeTagClose}

`;

let RepeatQuestions = {
    id: "RepeatQuestions",
    name: "Циклы",
    sub: "",
    descr: data_descr 
};

export { RepeatQuestions };