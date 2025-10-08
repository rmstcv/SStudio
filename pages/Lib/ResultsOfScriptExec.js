import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Результат выполнения скрипта
${globalVars.titleTextTagClose}
${globalVars.codeTextTagOpen}
return ok; //не подразумевает выполнение системой каких-то дополнительных действий
return skip; //используется в скриптах перед показом вопроса и заставляет систему сбросить состояние текущего вопроса и перейти к следующему по порядку
return answered; //используется в скриптах перед показом вопроса и помечает вопрос как отвеченный, без вывода на экран
return error('Текст сообщения об ошибке'); //используется в скриптах после ответа, когда необходимо показать вопрос заново с сообщением об ошибке
return question(123); //возврат номера вопроса, на который необходимо совершить переход
return exitWithResult(InterviewResult.Completed, 'Текст прощального сообщения'); //Принудительное завершение интервью с проставлением результата
return exit('Текст прощального сообщения'); //выполняется завершение интервью, но всегда проставляется результат Завершено
return exitAndRestart(InterviewResult.Completed); //завершает интервью с проставлением результата, а затем автоматически начинает новое
${globalVars.codeTextTagClose}
`;

let ResultsOfScriptExec = {
    id: "ResultsOfScriptExec",
    name: "Результат",
    sub: "",
    descr: data_descr 
};

export { ResultsOfScriptExec };