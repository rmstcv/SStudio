import globalVars from "../../globalVars.js";

let data_descr = 
`${globalVars.titleTextTagOpen}Свойства и функции списка ответов${globalVars.titleTextTagClose}
    ${globalVars.textTagOpen}
Q.answers.
    count
    visibleCount
    getAll()
    getCodes()
    getVisibleCodes()
    getVisible()
    getCheckedCodes()
    getChecked()
    getCheckedOrderedCodes()
    getCheckedOrdered()
    getCheckedCode(true)
    isChecked(code)
    showAll()
    show(code, codes, answer, row, column)
    showOnly(code, codes, answer, row, column)
    showFromTo(codeFrom, codeTo)
    showOnlyFromTo(codeFrom, codeTo)
    hideAll()
    hide(code, codes, answer, row, column)
    hideOnly(code, codes, answer, row, column)
    hideFromTo(codeFrom, codeTo)
    hasVisible
    randomize()
    randomize(codes)
    randomizeFromTo(fromCode, toCode)
    randomizeGroups(groups)
    randomizeGroups(groupSize, firstNumbers)
    rotate()
    rotate([codes , shift])
    rotateFromTo(codeFrom, codeTo , shift)
    rotateGroups(groups , shift)
    rotateGroups(groupSize, firstNumbers , shift)
    setOrder(orderedCodes)
    add(code, text)
    insert(refCode, code, text)
    insertAfter(refCode, code, text)
    remove(code)
    remove(answer)
    load(fromQuestion)
    load(fromList)
${globalVars.textTagClose}
`;

let PropAnswerList = {
    id: "PropAnswerList",
    name: "Answers",
    sub: "",
    descr: data_descr
};

export { PropAnswerList };