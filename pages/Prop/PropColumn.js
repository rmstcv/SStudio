import globalVars from "../../globalVars.js";

let data_descr = 
`${globalVars.titleTextTagOpen}Свойства и функции колонки табличного вопроса
${globalVars.titleTextTagClose}
${globalVars.codeTextTagOpen}let col3 = Q23.columns[3]; // табличный вопрос с единственным или множественным выбором
${globalVars.codeTextTagClose}
${globalVars.textTagOpen}Q.columns[code].
    code
    text
    textLocalizations
    plainText
    flags
    visible
    width
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
    Опции колонки табличного вопроса, изменяющие различные её свойства. 
    Принимают и возвращают значения true и false.
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
        // Добавить колонке 5 числовое поле 
        Q.columns[5].settings.openValueNum = true;
        // Разрешить его не заполнять
        Q.columns[5].settings.allowEmptyOpenValue = true;

        // Если у колонки 98 есть текстовое поле…
        if (Q.columns[98].settings.openValueTxt) {
            // … что-то сделать
        }
        ${globalVars.codeTextTagClose}
${globalVars.textTagClose}
`;

let PropColumn = {
    id: "PropColumn",
    name: "Column",
    sub: "",
    descr: data_descr
};

export { PropColumn };