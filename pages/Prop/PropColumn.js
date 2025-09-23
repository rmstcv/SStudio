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
    imagePlacement
${globalVars.textTagClose}
`;

let PropColumn = {
    id: "PropColumn",
    name: "Column",
    sub: "",
    descr: data_descr
};

export { PropColumn };