import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.textTagOpen}Поиск элемента в массиве
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}[1,2,3].indexOf(2); // 1
[1,2,3].indexOf(4); // -1
${globalVars.codeTextTagClose}	
${globalVars.textTagOpen}Возвращает первый элемент массива, для которого предикат вернул true, или undefined если таких нет
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}[1,2,3,4].find(n => n > 2); // 3
['a','bb','ccc'].find(s => s.length===2); // 'bb'
${globalVars.codeTextTagClose}	
`;

let FindElemInArr = {
    id: "FindElemInArr",
    name: "Поиск элемента",
    sub: "",
    descr: data_descr 
};

export { FindElemInArr };