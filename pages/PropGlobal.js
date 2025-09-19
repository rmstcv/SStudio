import globalVars from "../globalVars.js";

let data_descr = 
`${globalVars.codeTextTagOpen}questions[2] // вопрос Q2
${globalVars.codeTextTagClose}
${globalVars.textTagOpen}
Объект questions.
    count
    getNumbers()
    getNumbers(qnFrom, qnTo)
    getAll()
    randomize()
    randomize(numbers)
    randomizeFromTo(qnFrom, qnTo)
    randomizeGroups(groups)
    randomizeGroups(groupSize, firstNumbers)
    rotate()
    rotate([numbers , shift])
    rotateFromTo(qnFrom, qnTo , shift)
    rotateGroups(groups , shift)
    rotateGroups(groupSize, firstNumbers , shift)
    setOrder(orderedCodes)
    setOrderGroups(groups)
    setOrderGroups(groupSize, firstNumbers)
    add(number, text, comment, type)
    insert(refNumber, number, text, comment, type)
    insertAfter(refNumber, number, text, comment, type)
    remove(number)
    repeat(qnFrom, qnTo, qnSrc , codes)
    repeatIfNot(qnFrom, qnTo, qnSrc , codes)
Объект parameters
Объект variables
Объект project
Объект interview.
    id (не поддерживается в приложении)
    result (не поддерживается в приложении)
    resultDetails (не поддерживается в приложении)
    ipAddress (не поддерживается в приложении)
    userAgent
    referer (не поддерживается в приложении)
    clientLoginName
    clientName (не поддерживается в приложении)
    contractor. (не поддерживается в приложении)
        clientLoginName (не поддерживается в приложении)
        clientName (не поддерживается в приложении)
        contractorName (не поддерживается в приложении)
        contractorCode (не поддерживается в приложении)
        contractorRegionName (не поддерживается в приложении)
Объект respondent.
    extId
    getLastInterviewAnswers(qn)
Объект contact (не поддерживается в приложении)
Объект user
Объект webClient (не поддерживается в приложении)
Объект images
Объект InterviewResult
Объект CallResult
Объект Language
rotationCounter
informationText(string)
informationTextAdd(string)
informationTextClear()
isTesting()
isPreProcessing()
isPostProcessing()
isQuotaReached()
isRedial()
isValidation()
isExport()
disableQuotaChecking()
enableQuotaChecking()
enableSaveWhenQuotaReached()
disableSaveWhenQuotaReached()
getCounter(name)
getCounterByTag(tag)
getCountersByTag(tag)
lockKey(string)
isKeyLocked(string)
calc(expression)
randomizeArray(array)
setCurrentLanguage(lang)
getCurrentLanguage()
getSurveyUrl()
${globalVars.textTagClose}
`;

let PropGlobal = {
    id: "PropGlobal",
    name: "Глобальные объекты, функции и переменные",
    sub: "",
    descr: data_descr
};

export { PropGlobal };