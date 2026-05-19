import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Дата и время
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
Позволяет ввести или выбрать в календаре время или дату, или все вместе.
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
Независимо от языка опроса, дата и время всегда хранятся в системе в формате ДД.ММ.ГГГГ ЧЧ:ММ
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
if (Q1.openValueTxt == '21.12.2012 07:40') {
    // сделать что-то
}
${globalVars.codeTagClose}
${globalVars.textSubTagOpen}
Скриптом также можно переопределить значение по умолчанию, например:
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
Q.defaultValue = '22.11.1984 15:36';
${globalVars.codeTagClose}
`;

let DateAndTime = {
    id: "DateAndTime",
    name: "Дата и время",
    sub: "",
    descr: data_descr 
};

export { DateAndTime };