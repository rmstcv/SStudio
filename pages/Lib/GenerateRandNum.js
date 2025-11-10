import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Выбрать случайные варианты ответа
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
В переменной num нужно указать желаемое количество случайных ответов. 
Если требуется делать выбор только среди определённых ответов, то их нужно сделать видимыми сразу после первого if, скрыв лишние. 
Скрипт перед показом:
${globalVars.textTagClose}
${globalVars.codeTagOpen}
let num = 1;

if (Q.isAnswered) return answered;

if (Q.visibleCount == 0) return skip;

for (let A of randomizeArray(Q.getVisible()).slice(0, num)) {
    A.checked = true;
}

return answered;
${globalVars.codeTagClose}
`;

let GenerateRandNum = {
    id: "GenerateRandNum",
    name: "Сгенерировать случайное число",
    sub: "",
    descr: data_descr 
};

export { GenerateRandNum };