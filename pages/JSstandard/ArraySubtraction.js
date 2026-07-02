import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.textTagOpen}Вычитание массивов
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}// Способ 1: filter() + includes() (для небольших массивов)
const result1 = arrayA.filter(item => !arrayB.includes(item));

// Способ 2: filter() + indexOf() (старый стиль)
const result2 = arrayA.filter(item => arrayB.indexOf(item) === -1);
${globalVars.codeTextTagClose}		
`;

let ArraySubtraction = {
    id: "ArraySubtraction",
    name: "Вычесть массив",
    sub: "",
    descr: data_descr 
};

export { ArraySubtraction };