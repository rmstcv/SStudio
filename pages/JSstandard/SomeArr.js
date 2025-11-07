import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.textTagOpen}Проверка, что хотя бы один элемент массива проходит условие:
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}[1,2,3].some(x => x > 2); // true
['a','b'].some(ch => ch === 'z'); // false

${globalVars.codeTextTagClose}
${globalVars.textTagOpen}проверить наличие элемента в массиве по условию
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}const arr = [1,2,3];
const exists = arr.some(x => x === 2); // true
${globalVars.codeTextTagClose}
${globalVars.textTagOpen}проверить наличие элемента в массиве из другого массива
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}const arr = [1,2,3];
const other = [3,7];
const any = other.some(x => arr.indexOf(x) !== -1); // true
[3,7].some(x => [1,2,3].indexOf(x) !== -1); // true
${globalVars.codeTextTagClose}
`;

let SomeArr = {
    id: "SomeArr",
    name: "Проверить элемент",
    sub: "",
    descr: data_descr 
};

export { SomeArr };