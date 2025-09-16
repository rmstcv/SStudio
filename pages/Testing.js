import globalVars from "../globalVars.js";

const data_descr = `
    Тестирование
`;
const data_descr_TestingStart = `
Тестирование в браузере (кнопка <b>Запуск</b>):<br>
<img src="images/testLink.jpg" alt="testLink " width="300">
<br>
<br>
Тестирование в приложении (кнопка <b>Start test survey</b>):<br>
<img src="images/testLinkApp.jpg" alt="testLink " width="300">
`;

const data_descr_TestingFuncIsTesting = `
Для того, что бы показать вопрос только в тестовом режиме необходимо добавить функцию в Скрипты -> Функции :
${globalVars.codeTagOpen}
function testAnswered(Q) {
    if (isTesting()) {
        let text = "&lt;font color='red'&gt;ЭКРАН БУДЕТ ВИДЕН ТОЛЬКО НА ТЕСТОВОЙ ССЫЛКЕ&lt;/font&gt;&lt;br&gt;" + Q.text;
        Q.text = text;
        return ok;
    } else {
        return answered;
    }
}
${globalVars.codeTagClose}
В Вопросе в <b>скрипты перед показом</b> вызвать функцию:<br><br>

${globalVars.codeTagOpen}
return testAnswered(Q);
${globalVars.codeTagClose}
`;

const data_descr_TestingVarName = `
Глобальный скрипт перед показом:
${globalVars.codeTagOpen}
if (isTesting()) {
    let tmp = Q.outputColumnTemplate;
    if (tmp !== undefined) {
        tmp = tmp.replace(/([._]|){\d}|'/g, '');

        if (Q.text.indexOf(tmp) == -1) {
            Q.text = '&lt;font color=&quot;gray&quot;&gt;' + tmp + '&lt;/font&gt;&lt;br /&gt;' + Q.text;
        }
    }
}
${globalVars.codeTagClose}
`;

const data_descr_TestingGoTo = ` 
${globalVars.codeTagOpen}
if (isTesting()) {
    informationTextAdd('TEST MODE')
        function qGlobalName(alias) {
            return question(alias.number)
        }
    q2_1.answers[1].checked = true // выбрать ответ в вопросе q2_1
    return qGlobalName(b_dummy) // переход к вопросу b_dummy
}
${globalVars.codeTagClose}
`;

const TestingStart = {id:'TestingStart', name:'Тестирование анкеты', sub:'', descr: data_descr_TestingStart};
const TestingFuncIsTesting = {id:'TestingFuncIsTesting', name:'Тестовый экран', sub:'', descr: data_descr_TestingFuncIsTesting};
const TestingVarName = {id:'TestingVarName', name:'Показывать имя (шаблон) вопроса в режиме тестирования анкеты', sub:'', descr: data_descr_TestingVarName};
const TestingGoTo = {id:'TestingGoTo', name:'Переход к вопросу (аналог goToSkok)', sub:'', descr: data_descr_TestingGoTo};

const subs = "TestingStart, TestingFuncIsTesting, TestingVarName, TestingGoTo";
const Testing = {id: "Testing", name: "Тестирование", sub: subs, descr: data_descr};

const TestingPage = [
    Testing,
    TestingStart,
    TestingFuncIsTesting,
    TestingVarName,
    TestingGoTo
]

export { TestingPage };