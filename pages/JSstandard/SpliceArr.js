import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.textTagOpen}Для удаления, замены и вставки элементов
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}let a = [1,2,3,4];
a.splice(1, 2); // удаляет 2 элемента с индекса 1 -> возвращает [2,3], a = [1,4]
a.splice(1, 0, 9); // вставляет 9 в индекс 1 -> возвращает [], a = [1,9,2,3,4]
a.splice(2, 1, 7, 8); // заменяет 1 элемент на 7 и 8 -> returns [3], a = [1,2,7,8,4]
a.splice(0, a.length); // удаляет все -> returns [1,2,3,4], a = []
${globalVars.codeTextTagClose}		
`;

let SpliceArr = {
    id: "SpliceArr",
    name: "Splice",
    sub: "",
    descr: data_descr 
};

export { SpliceArr };