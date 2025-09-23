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
    rightTitleLocalizations
${globalVars.textTagClose}
`;

let PropRow = {
    id: "PropRow",
    name: "Row",
    sub: "",
    descr: data_descr
};

export { PropRow };