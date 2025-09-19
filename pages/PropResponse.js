import globalVars from "../globalVars.js";

let data_descr = 
`${globalVars.codeTextTagOpen}let a1 = Q23[3]; // вопрос с единственным или множественным выбором
let a2 = Q23.answers[3];
let a3 = Q24.answer; // числовой или текстовый вопрос
let a4 = Q25.rows[2]; // табличный числовой или текстовый вопрос
let a5 = Q25.rows[2].answer;
let a6 = Q26.rows[4][1]; // табличный вопрос с единственным или множественным выбором
let a7 = Q26.rows[4].answers[1];
${globalVars.codeTextTagClose}${globalVars.textTagOpen}
Q.answers.
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

let PropResponse = {
    id: "PropResponse",
    name: "Свойства и функции ответа",
    sub: "",
    descr: data_descr
};

export { PropResponse };