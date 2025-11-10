import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Проверка качества интервью
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
Установить минимальное время заполнения анкеты
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
Чтобы задать минимальное время прохождения анкеты - добавьте 2 вопроса с типом Числовой:
${globalVars.textSubTagClose}
${globalVars.codeTextTagOpen}
Чтобы задать минимальное время прохождения анкеты - добавьте 2 вопроса с типом Числовой:

Q8101 — отметка времени начала интервью (в начале анкеты).
Q8102 — отметка времени завершения интервью (в конце анкеты).
${globalVars.codeTextTagClose}
${globalVars.textSubTagOpen}
В оба вопроса добавьте скрипт перед показом:
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
if (Q.isAnswered) return answered;

Q.openValueInt = Date.now();    

return answered;
${globalVars.codeTagClose}
${globalVars.textSubTagOpen}
В вопрос Q8102 добавьте также скрипт после ответа.
Измените значение переменной minMinutes на нужное количество минут (по умолчанию — 5).
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
let minMinutes = 5; // минимальное время заполнения (в минутах)
let durationSeconds = Math.floor((Q8102.openValueInt - Q8101.openValueInt) / 1000); // замеряемое время заполнения в секундах

if (durationSeconds < minMinutes * 60) { // если время оказалось меньше
    return exitWithResult(InterviewResult.Defect); // завершить интервью с результатом Брак
}
${globalVars.codeTagClose}
`;

let SurveyQuality = {
    id: "SurveyQuality",
    name: "Проверка качества",
    sub: "",
    descr: data_descr 
};

export { SurveyQuality };