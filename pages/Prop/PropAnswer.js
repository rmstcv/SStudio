import globalVars from "../../globalVars.js";

let data_descr = 
`${globalVars.titleTextTagOpen}Свойства и функции ответа${globalVars.titleTextTagClose}
${globalVars.codeTextTagOpen}
let answer1 = Q23.answers[1]; // вопрос с единственным или множественным выбором
let answer3 = Q24.answer; // числовой или текстовый вопрос
${globalVars.codeTextTagClose}${globalVars.textTagOpen}
Q.answers[code].
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
    imagePlacement
${globalVars.textTagClose}
`;

let PropAnswer = {
    id: "PropAnswer",
    name: "Answer",
    sub: "",
    descr: data_descr
};

export { PropAnswer };