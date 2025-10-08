import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Какой метод использовать
${globalVars.titleTextTagClose}
${globalVars.codeTextTagOpen}
Нужно выбрать элементы по условию → filter. //[3,7].filter(x => [1,2,3].indexOf(x) !== -1); // [3]
Нужно просто проверить наличие конкретного примитива → indexOf (или includes).
Нужно найти первый подходящий элемент → find. //[1,2,3,4].find(n => n > 2);            // 3
Нужно проверить, есть ли хоть один совпадающий → some. // [3,7].some(x => [1,2,3].indexOf(x) !== -1); // true
${globalVars.codeTextTagClose}
`;

let ArrayMethods = {
    id: "ArrayMethods",
    name: "Методы массива",
    sub: "",
    descr: data_descr 
};

export { ArrayMethods };