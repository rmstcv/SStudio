import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Контроль правильности ответа на вопрос
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
Длина текста
${globalVars.textTagClose}
${globalVars.codeTagOpen}
if (Q.openValueTxt.length < 3) {
    return error('Пожалуйста, дайте более развёрнутый ответ');
}
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Проверка ввода числа
${globalVars.textTagClose}
${globalVars.codeTagOpen}
for (let row of Q.rows.getVisible()) {
    let num = row.answer.openValueNum;
    if (num < 1 || num > 100) {
        return error('В строке '+ row.code +' можно вводить только числа от 1 до 100');
    }
}
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Проверка корректности чисел из нескольких вопросов
${globalVars.textTagClose}
${globalVars.codeTagOpen}
if (Q.openValueNum > Q1.openValueNum) {
    return error('Введённое число не может быть больше числа из Q1');
}
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Выделение строки с ошибкой
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
разрешить выбирать ответ 7 только в строках с кодами 1, 3 и 9 в табличном вопросе
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
let rCodes = [1, 3, 9];
for (let row of Q.rows.getVisible()) {
    row.text = row.plainText;

    if (row.isChecked(7) && !rCodes.includes(row.code)) {
        row.text = '&lt;font color=&quot;red&quot;&gt;&lt;b&gt;' + row.text + '&lt;/b&gt;&lt;/font&gt;'
        return error('В этой строке нельзя выбирать ответ 7');
    }
}
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Отключение проверки ответов
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
Включив опцию Проверка ответа скриптами можно будет не указывать никакого ответа в вопросе или ответить на него частично и перейти к следующему вопросу
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
for (let row of Q.rows.getVisible()) {
    if (row.getCheckedCodes().length > 0) return ok;
}

return error('Пожалуйста, выберите хотя бы 1 ответ');
${globalVars.codeTagClose}
${globalVars.textSubTagOpen}
Вопрос с отключённой проверкой ответа является для системы отвеченным, поэтому в скриптах свойство isAnswered для него всегда будет true.
${globalVars.textSubTagClose}
${globalVars.textTagOpen}
Проверка суммы введённых чисел
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
В табличный числовой вопрос добавить скрипт после ответа:
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
let sum = 100;
let total = 0;

for (let row of Q.rows.getVisible()) {
    let num = row.answer.openValueNum;

    total += num ? num : 0;
}

total = +total.toFixed(2);

if (total != sum) {
    return error('Сумма значений не равна ' + sum + '. Сейчас ' + total);
}
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Требовать ответ только в указанном количестве строк табличного вопроса
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
В свойствах вопроса необходимо включить флаг Проверка ответа скриптами и добавить скрипт после ответа:
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
let min = 2; // количество строк с ответом
let count = 0;

if (min > Q.rows.visibleCount) min = Q.rows.visibleCount;

for (let row of Q.rows.getVisible()) {
    switch (Q.type) {
        case QuestionTypeIds.Table_Text:
            if (row.answer.openValueTxt !== undefined) count++;
            break;

        case QuestionTypeIds.Table_Numeric:
        case QuestionTypeIds.Table_Rating:
            if (row.answer.openValueNum !== undefined) count++;
            break;

        case QuestionTypeIds.Table_SingleChoice:
        case QuestionTypeIds.Table_MultipleChoice:
            if (row.getCheckedCodes().length > 0) count++;
            break;
    }

    if (count >= min) return ok;
}

return error('Требуется заполнить не менее ' + min + ' строк');
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Проверить правильность введённого номера телефона, но разрешить вводить 99 при отказе от ответа
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
Если вопрос числовой, то нужно добавить в него такой скрипт после ответа:
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
let phone = Q.openValueNum;

if (phone == 99) return ok;

if (phone < 80000000000 || phone > 89999999999) {
    return error('Телефон должен начинаться с 8 и содержать 11 цифр. ' +
                 'В случае отказа, введите 99.');
}
${globalVars.codeTagClose}
${globalVars.textSubTagOpen}
Если вопрос табличный текстовый, с телефоном в первой строке:
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
let row = Q.rows[1].answer;

if (row.openValueTxt === undefined) return ok;

let phone = row.openValueTxt.replace(/\D/g, '');

phone = parseInt(phone, 10);

if (phone == 99) return ok;

if (isNaN(phone) || phone < 80000000000 || phone > 89999999999) {
    return error('Телефон должен начинаться с 8 и содержать 11 цифр. ' +
                 'Остальные символы будут удалены. В случае отказа, ' +
                 'введите 99.');
}

row.openValueTxt = phone;
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Требовать ответ в необязательной для заполнения строке таблицы с выбором, если заполнено текстовое поле
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
В свойствах строки должны стоять флаги Проверка ответа скриптами и С открытым значением (текст). Добавить скрипт после ответа:
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
let rFlags = AnswerFlags.CustomRowValidation | AnswerFlags.OpenValueTxt;

for (let row of Q.rows.getVisible()) {
    if ((row.flags & rFlags) != rFlags) continue;

    if (row.openValueTxt && row.getCheckedCodes().length == 0) {
        return error('Необходимо выбрать ответ в строке ' + row.plainText);
    }

    if (row.openValueTxt === undefined && row.getCheckedCodes().length) {
        return error('Необходимо уточнить ответ в строке ' + row.plainText);
    }
}
${globalVars.codeTagClose}
`;

let ValidationAnswers = {
    id: "ValidationAnswers",
    name: "Валидация",
    sub: "",
    descr: data_descr 
};

export { ValidationAnswers };