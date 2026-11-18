import globalVars from "../../globalVars.js";

let data_descr = 
`${globalVars.titleTextTagOpen}Свойства и функции списка колонок табличного вопроса
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
Q.columns.
    count
    visibleCount
    getAll()
    getCodes()
    getVisibleCodes()
    getVisible()
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
    remove(column)
    load(fromQuestion)
    load(fromList)
${globalVars.textTagClose}
`;

let PropColumnList = {
    id: "PropColumnList",
    name: "Columns",
    sub: "",
    descr: data_descr
};

export { PropColumnList };