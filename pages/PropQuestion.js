import globalVars from "../globalVars.js"

let data_descr = `
${globalVars.texTagOpen}   
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
rightTitleLocalization
${globalVars.textTagClose}
`

let PropQuestion = {
    id: "PropQuestion",
    name: "Свойства и функции вопроса",
    sub: "",
    descr: data_descr
}

export { PropQuestion }