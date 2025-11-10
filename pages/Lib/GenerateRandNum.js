import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Сгенерировать случайное число в указанном диапазоне
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
В переменной num нужно указать желаемое количество случайных ответов. 
Если требуется делать выбор только среди определённых ответов, то их нужно сделать видимыми сразу после первого if, скрыв лишние. 
Скрипт перед показом:
${globalVars.textTagClose}
${globalVars.codeTagOpen}
if (Q.isAnswered) return answered;

Q.openValueNum = getRandomFromTo(1, 10);

return answered;

function getRandomFromTo(min, max) {
    let range = max - min + 1;

    return Math.floor(Math.random()*range) + min;
}
${globalVars.codeTagClose}
`;

let GenerateRandNum = {
    id: "GenerateRandNum",
    name: "Сгенерировать случайное число",
    sub: "",
    descr: data_descr 
};

export { GenerateRandNum };