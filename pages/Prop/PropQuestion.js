import globalVars from "../../globalVars.js";

let data_descr = 
`${globalVars.titleTextTagOpen}Свойства и функции вопроса
${globalVars.titleTextTagClose}
${globalVars.codeTextTagOpen}let question1 = Q; // используя параметр Q, который передается в скрипты перед показом и после ответа на вопрос
let question2 = Q2; // используя глобальные переменные
let question3 = questions[3]; // используя объект questions
let question4 = q_1; // используя шаблон
${globalVars.codeTextTagClose}
${globalVars.textTagOpen}Q.
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
    name: "Question",
    sub: "",
    descr: data_descr
};

export { PropQuestion };