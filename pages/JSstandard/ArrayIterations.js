import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.textTagOpen}for...of (не работает с объектами)
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}конструкция для перебора итерируемых объектов в JavaScript (arrays, strings, Map, Set, NodeList и т. п.)

for (const item of iterable) {
  // использовать item
}

Перебирает значения (а не ключи). Для массива item — значение элемента.
Работает с любыми iterable (Array, String, Map, Set, arguments, DOM-коллекции и т.д.).
Поддерживает break, continue и return внутри цикла.
${globalVars.codeTextTagClose}
${globalVars.textTagOpen}for...in
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}Перебирает перечисляемые ключи (имена свойств) объекта, включая прототипы — не рекомендуется для массивов.

Если нужен for...in (перечисляет имена свойств, включая прототипы) — осторожно:

for (const key in obj) {
  if (!Object.prototype.hasOwnProperty.call(obj, key)) continue; // фильтр прототипа
  console.log(key, obj[key]);
}
${globalVars.codeTextTagClose}
${globalVars.textTagOpen}Перебор ключей
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}const obj = { a: 1, b: 2 };
for (const key of Object.keys(obj)) {
  console.log(key, obj[key]);
}
${globalVars.codeTextTagClose}
${globalVars.textTagOpen}Перебор значений
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}for (const value of Object.values(obj)) {
  console.log(value);
}
${globalVars.codeTextTagClose}
${globalVars.textTagOpen}Перебор пар [ключ, значение]
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}
${globalVars.codeTextTagClose}
`;

let ArrayIterations = {
    id: "ArrayIterations",
    name: "Переборы",
    sub: "",
    descr: data_descr 
};

export { ArrayIterations };