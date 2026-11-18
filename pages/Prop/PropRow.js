import globalVars from "../../globalVars.js";

let data_descr = 
`${globalVars.titleTextTagOpen}Свойства и функции строки табличного вопроса
${globalVars.titleTextTagClose}
${globalVars.codeTextTagOpen}let row3 = Q23.rows[3].answers[1]; // табличный вопрос с единственным или множественным выбором
let row4 = Q23.rows[4].answer; // табличный числовой или текстовый вопрос
${globalVars.codeTextTagClose}
${globalVars.textTagOpen}Q.rows[code].
    code
    text
    textLocalizations
    plainText
    openValueNum
    openValueInt
    openValueTxt
    flags
    visible
    width
    exportCodeOverride
    outputColumnTemplate
    outputColumnTemplateOVN
    outputColumnTemplateOVT
    answer
    answers
    show()
    hide()
    getAll()
    getCodes()
    getVisibleCodes()
    getVisible()
    getCheckedCodes()
    getChecked()
    getCheckedCode(true)
    isChecked(code)
    showAll()
    show(code, codes, answer, row, column)
    showOnly(code, codes, answer, row, column)
    showFromTo(codeFrom, codeTo)
    showOnlyFromTo(codeFrom, codeTo)
    hideAll()
    hide(code, codes, answer, row, column)
    hideFromTo(codeFrom, codeTo)
    hasVisible
    image
    imageUrl
    imagePlacement
    leftTitle
    rightTitle
    leftTitleLocalizations
    rightTitleLocalizations${globalVars.textTagOpen}
    settings${globalVars.textTagClose}${globalVars.textSubTagOpen}
    Опции строки табличного вопроса, изменяющие различные её свойства.
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
        // Добавить строке 5 числовое поле 
        Q.rows[5].settings.openValueNum = true;
        // Разрешить его не заполнять
        Q.rows[5].settings.allowEmptyOpenValue = true;

        // Если у строки 98 есть текстовое поле…
        if (Q.rows[98].settings.openValueTxt) {
            // … что-то сделать
        }
        ${globalVars.codeTextTagClose}
${globalVars.textTagClose}
`;

let PropRow = {
    id: "PropRow",
    name: "Row",
    sub: "",
    descr: data_descr
};

export { PropRow };