import globalVars from "../../globalVars.js";

const data_descr = `
    Тестирование
`;
const data_descr_TestingStart = `
Тестирование в браузере (кнопка <b>Запуск</b>):</br></br>
<img src="images/testLink.jpg" alt="testLink " width="300">
</br></br>
Тестирование в приложении (кнопка <b>Start test survey</b>):</br></br>
<img src="images/testLinkApp.jpg" alt="testLink " width="200">
`;

const data_descr_TestingFuncIsTesting = `${globalVars.textTagOpen}
В Вопросе в <b>скрипты перед показом</b> вызвать функцию:<br><br>${globalVars.textTagClose}
${globalVars.codeTextTagOpen}return testAnswered(Q);
${globalVars.codeTextTagClose}
`;

const data_descr_TestingVarName = `${globalVars.textTagOpen}
Глобальный скрипт перед показом:
${globalVars.textTagClose}
${globalVars.codeTagOpen}
if (isTesting()) {

    let numTempl = Q.outputColumnTemplate;

    if (numTempl !== undefined && numTempl.includes("{3}")) {
        numTempl = numTempl.replace("{3}", Q.number % 10);
    }
    
    let numOrig = Q.number;
    let tmp = '&lt;font color=&quot;gray&quot;&gt;' + 'Q' + numOrig + ' [' + numTempl + ']'+ '&lt;/font&gt;&lt;br /&gt;';
    let textQ = Q.text;
     
    if (textQ.includes(tmp)) {
        textQ = textQ.replace(tmp, "");
    }
    Q.text  = tmp + textQ;
}
       
${globalVars.codeTagClose}
`;

const data_descr_TestingGoTo = `${globalVars.textTagOpen}
Глобальный скрипт перед показом:
${globalVars.textTagClose} 
${globalVars.codeTagOpen}if (isTesting()) {
    informationTextAdd('TEST MODE');
    q2_1.answers[1].checked = true; // выбрать ответ в вопросе q2_1
    return question(q2_1.number); // переход к вопросу q2_1 (используя алиас имени)
    return question(3); // переход к вопросу Q3 (используя системное имя)
}

${globalVars.codeTagClose}
`;

const data_descr_TestingDebug = `${globalVars.textTagOpen}
В Вопросе перед показом вызвать стандартную функцию:
${globalVars.textTagClose} 
${globalVars.codeTagOpen}if (isTesting()) {
    informationTextAdd(debugInfo); // debugInfo - информация, которую нужно вывести (отобразится на странице вопроса внизу)
};

${globalVars.codeTagClose}
`;

const TestingStart = {id:'TestingStart', name:'Тестирование анкеты', sub:'', descr: data_descr_TestingStart};
const TestingFuncIsTesting = {id:'TestingFuncIsTesting', name:'Тестовый экран', sub:'', descr: data_descr_TestingFuncIsTesting};
const TestingVarName = {id:'TestingVarName', name:'Показывать имя (шаблон) вопроса в режиме тестирования анкеты', sub:'', descr: data_descr_TestingVarName};
const TestingGoTo = {id:'TestingGoTo', name:'Переход к вопросу', sub:'', descr: data_descr_TestingGoTo};
const TestingDebug = {id:'TestingDebug', name:'Вывести информацию (debug)', sub:'', descr: data_descr_TestingDebug};

const SurveyTesting = {
    id: "SurveyTesting", 
    name: "Тестирование", 
    sub: "TestingStart, TestingFuncIsTesting, TestingVarName, TestingGoTo, TestingDebug", 
    descr: data_descr
};

const SurveyTestingSubs = [
    TestingStart,
    TestingFuncIsTesting,
    TestingVarName,
    TestingGoTo,
    TestingDebug
]

const SurveyTestingPage = [
    SurveyTesting,
    ...SurveyTestingSubs
]

export { SurveyTestingPage };