import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Сохранить выбранные ответы (обязательно использовать, когда надо выбрать произвольно ответы, или замерить время)
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
Если скрытый вопрос, в скрипт перед показом добавить:
${globalVars.textTagClose}
${globalVars.codeTagOpen}
if (Q.isAnswered) return testAnswered(Q);
${globalVars.codeTagClose}${globalVars.textTagOpen} Еесли обычный вопрос, в скрипт перед показом добавить:
${globalVars.textTagClose}
${globalVars.codeTagOpen}
if (Q.isAnswered) return answered;
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Для каких то заранее установленных значений можно использовать проверку что не идет повторный проход (например, мы поставили дефолтные ответы, и нам не нужно, что бы при проверке они опять установились).
Выражение ниже возвращает значение true, если исполняется глобальный скрипт Обработка или производится повторный проход анкеты для нормализации ответов - очистка интервью от ответов, не соответствующих заданным в анкете условиям и переходам.
${globalVars.textTagClose}
${globalVars.codeTagOpen}
if (isPostProcessing() || isValidation()) return ok;
${globalVars.codeTagClose}
`;

let SaveAnswers = {
    id: "SaveAnswers",
    name: "Сохранить ответы",
    sub: "",
    descr: data_descr 
};

export { SaveAnswers };