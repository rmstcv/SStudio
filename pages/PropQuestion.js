import globalVars from "../globalVars.js";

let data_descr = 
`${globalVars.codeTextTagOpen}let question1 = Q; // используя параметр Q, который передается в скрипты перед показом и после ответа на вопрос
let question1 = Q1; // используя глобальные переменные
let question1 = questions[1]; // используя объект questions
${globalVars.codeTextTagClose}
${globalVars.textTagOpen}
Q.
    number
    type
    text
    textLocalizations
    plainText
    comment
    commentLocalizations
    plainComment
    condition
    flags (Устарело)
    questionFlags
    surveyFlags
    minAnswerCount
    maxAnswerCount
    columnCount
    textLineCount
    openValueNum
    openValueInt
    openValueTxt
    isAnswered
    outputColumnTemplate
    outputColumnTemplateOVN
    outputColumnTemplateOVT
    answer
    answers
    rows
    columns
    categoricalIndexes
    reset()
    image
    imageUrl
    imagePlacement
    allowedAttachmentsType
    minAttachmentsCount
    maxAttachmentsCount
    attachmentsCount
    latitude
    longitude
    address
    autoAnswerSec
    autoAnswerCode
    answerNumberFrom
    answerNumberTo
    icon
    leftTitle
    rightTitle
    leftTitleLocalizations
    rightTitleLocalizations
${globalVars.textTagClose}
`;

let PropQuestion = {
    id: "PropQuestion",
    name: "Свойства и функции вопроса",
    sub: "",
    descr: data_descr
};

export { PropQuestion };