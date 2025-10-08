import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Подстановки необходимого значения в текст вопроса или ответа.
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
Используя хранилище глобальных переменных.
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
Объект может хранить значения только простого типа (строка, число, true/false)
Не стоит использовать глобальные переменные в скрипте Подготовка, если от них зависит логика анкеты, так как при пост-обработке глобальные переменные из этого скрипта всегда пусты.
${globalVars.textSubTagClose}
${globalVars.codeTextTagOpen}
variables['ФИО'] = 'Иванов И.И.'; // В текст подставляется так: {ФИО}
variables.name = 'Пётр'; // В текст подставляется так: {name}
V['age'] = 21;
V.title = 'Hello, World!';
${globalVars.codeTextTagClose}
${globalVars.textTagOpen}
Используя специальные подстановки:
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}
{Q1} - все выбранные ответы в вопросе Q1 через запятую
{Q5.1N} — число из числового поля ответа 1, если вопрос с выбором ответа, или из числового поля строки 1, если вопрос любой табличный.
{Q5.98T} — текст из текстового поля ответа 98, если вопрос с выбором ответа, или из текстового поля строки 98, если вопрос любой табличный.
{Q5.1} — текст или число ответа в строке 1 табличных текстового, числового и рейтингового вопросов.
{Q5.1.2N} — число из числового поля ответа 2 в строке 1 табличного вопроса с выбором ответа.
{Q5.2.98T} — текст из текстового поля ответа 98 в строке 2 табличного вопроса с выбором ответа.
{answerText} - подстановка текста ответа для циклов.
{answerCode} - подстановка кода ответа для циклов.
${globalVars.codeTextTagClose}
${globalVars.textTagOpen}
Подставить текст ответа в переменную:
${globalVars.textTagClose}
${globalVars.codeTagOpen}
if (Q1.isAnswered) {
    let s = '';

    for (let A of Q1.getChecked()) {
        s += s.length > 0 ? ', ' : '';
        s += A.flags & AnswerFlags.OpenValueTxt ? A.openValueTxt : A.text;
    }

    V['Название'] = s;
} else {
    V['Название'] = '!ОШИБКА!';
}
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Подстановки кодов ответов и строк таблицы в поле Шаблон редактора вопроса для формирования имён переменных (если необходимо отключить в анкете автоматическое формирование имен переменных):
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}
{1} - код варианта ответа или его порядковый номер, если включён режим категориального кодирования ответов,
{2} - код строки таблицы,
{3} - код или псевдоним варианта ответа, для которого создаётся вопрос - если он находится внутри цикла,
{0} - номер вопроса SURVEYSTUDIO (для экзотических случаев).

Если перевести на русский язык, то, например {2}, буквально означает: «подставить на это самое место код строки таблицы».

Схема подстановок имен переменных массива:
https://coggle.it/diagram/YEiHIdWHwvE_MPx8/t/q10/0a675152e0204e4b63120ff98c7d41eff87e41a299c53a4a270a9be7ce6ef5b9
${globalVars.codeTextTagClose}
`;

let VarSubstitution = {
    id: "VarSubstitution",
    name: "Подстановки",
    sub: "",
    descr: data_descr 
};

export { VarSubstitution };