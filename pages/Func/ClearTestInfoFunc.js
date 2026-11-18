import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}Функция очищает сообщение о тестовом экране${globalVars.titleTextTagClose}
${globalVars.codeTagOpen}function clearTestInfo(Q) {
    
    if (isTesting()) {
        let text = "&lt;font color='red'&gt;ЭКРАН БУДЕТ ВИДЕН ТОЛЬКО НА ТЕСТОВОЙ ССЫЛКЕ&lt;/font&gt;&lt;br&gt;" 
        let str = Q.text
        
        if (str.includes(text)) {
          Q.text = str.replace(text, "")
        }
    }
}
${globalVars.codeTagClose}
`;

let ClearTestInfoFunc = {
    id: "ClearTestInfoFunc",
    name: "Очистить тест инфо",
    sub: "",
    descr: data_descr
};

export { ClearTestInfoFunc };