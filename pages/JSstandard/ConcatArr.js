import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.textTagOpen}Для объединения массивов/значений в новый массив
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}[1,2].concat([3,4]); // [1,2,3,4]
[1,2].concat(3,4); // [1,2,3,4]
[1,2].concat([3,[4]]); // [1,2,3,[4]]
[1].concat([[2]]); // [1, [2]] (вложенный массив добавлен как элемент, т.к. только один уровень расплющивания)
[].concat(1, [2,3], 4); // [1,2,3,4]
${globalVars.codeTextTagClose}		
`;

let ConcatArr = {
    id: "ConcatArr",
    name: "Concat",
    sub: "",
    descr: data_descr 
};

export { ConcatArr };