import globalVars from "../../globalVars.js";

let data_descr = 
`${globalVars.titleTextTagOpen}Свойства и функции ответа
${globalVars.titleTextTagClose}
${globalVars.codeTextTagOpen}let answer1 = Q23.answers[1]; // вопрос с единственным или множественным выбором
let answer3 = Q24.answer; // числовой или текстовый вопрос
${globalVars.codeTextTagClose}
${globalVars.textTagOpen}Q.answers[code].
    code
    text
    textLocalizations
    plainText
    openValueNum
    openValueInt
    openValueTxt
    flags
    checked
    visible
    exportCodeOverride
    outputColumnTemplate
    outputColumnTemplateOVN
    outputColumnTemplateOVT
    show()
    hide()
    image
    imageUrl
    imagePlacement${globalVars.textTagOpen}
    settings
    ${globalVars.textTagClose}${globalVars.textSubTagOpen}
    Опции ответа, изменяющие различные его свойства. Принимают и возвращают значения true и false.
    !!!
    Опции, влияющие на структуру массива, следует включать/выключать в скрипте Подготовка. 
    Если включить, например, флаг С открытым значением (текст) в скрипте перед показом, 
    то текстовое поле в вопросе появится, но введённый текст в массив НЕ попадёт.
    !!!
    ${globalVars.textSubTagClose}
        openValueNum
        openValueTxt
        multilineTxt
        blocking
        blockingInTheGroup
        alwaysVisible
        disableReordering
        disableRepeat
        skipExport
        skipExportOV
        hideInRespondentMode
        allowFractionalNumbers
        allowEmptyOpenValue
        hideCode
        hideText
        firstColumnBottom
        useDatePicker
        useTimePicker
        customRowValidation
        hideInRespondentMode
        ${globalVars.textSubTagOpen}
        Примеры использования:
        ${globalVars.textSubTagClose}${globalVars.codeTextTagOpen}
        // Добавить ответу 5 числовое поле 
        Q[5].settings.openValueNum = true;

        // Разрешить его не заполнять
        Q[5].settings.allowEmptyOpenValue = true;

        // Если у ответа 98 есть текстовое поле…
        if (Q[98].settings.openValueTxt) {
            // … что-то сделать
        }
        ${globalVars.codeTextTagClose}
${globalVars.textTagClose}
`;

let PropAnswer = {
    id: "PropAnswer",
    name: "Answer",
    sub: "",
    descr: data_descr
};

export { PropAnswer };