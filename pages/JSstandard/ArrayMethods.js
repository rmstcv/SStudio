import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Какой метод использовать
${globalVars.titleTextTagClose}
${globalVars.codeTextTagOpen}Выбрать элементы по условию → filter
    [3,7].filter(x => [1,2,3].indexOf(x) !== -1); // [3]
Проверить наличие конкретного примитива → indexOf (или includes)
    [1,2,3].indexOf(1) !== -1); // true
Найти первый подходящий элемент → find
    [1,2,3,4].find(n => n > 2); // 3
Получить индекс по условию → findIndex (в отличие от indexOf(NaN) -> -1)
    [1,2,3,4].findIndex(n => n > 2); // 2
Проверить, есть ли хоть один совпадающий → some
    [3,7].some(x => [1,2,3].indexOf(x) !== -1); // true
Проверить, что все элементы соответствуют условию → every
    [2,4,6].every(n => n % 2 === 0); // true
Преобразовать элементы → map
    [1,2,3].map(n => n * 2); // [2,4,6]
Последовательно свести в одно значение → reduce
    [1,2,3].reduce((s, n) => s + n, 0); // 6
Перебрать с возможностью прерывания/индексами → обычный for или for...of 
    for (let i=0; i < arr.length; i++) {}
    for (const [i, v] of arr.entries()) { if (v === target) break; }
Удалить/вставить/заменить элементы (мутирует) → arr.splice(start, deleteCount, ...items)
    arr.splice(i, 1) // Мутация массива — когда нужно изменить исходник
Создать копию / объединить → arr.slice() / arr.concat(...) / [...arr]
    const copy = arr.slice(); // Немутабельно, для безопасных операций
    const merged = [...a, ...b]; 
Выполнение побочных эффектов для каждого элемента → forEach
    const a = [1,2,3];
    a.forEach((v, i, arr) => { arr[i] = v * 2; }); // мутирует a -> [2,4,6]


Перебрать значения массива (простая итерация) → for...of
    for (const v of arr) { ... } // Читабельно, поддерживает break/continue; для любого iterable
Перебрать индексы массива → for (let i = 0; i < arr.length; i++)
    for (const [i,v] of arr.entries())
    for (let i = 0; i < arr.length; i++) { ... } // Нужен индекс для мутаций или доступа к соседним элементам
Перебрать перечисляемые ключи объекта → for...in (с фильтром)
    for (const k in obj) if (Object.hasOwn(obj, k)) { ... } // Перечисляет имена свойств, включая прототипы — фильтруйте hasOwn
Перебрать собственные ключи объекта → Object.keys(obj) + for...of
    for (const k of Object.keys(obj)) { ... } // Надёжно для собственных свойств; порядок определён
Перебрать значения объекта → Object.values(obj) + for...of
    for (const v of Object.values(obj)) { ... } // Когда нужны только значения
Перебрать пары ключ-значение объекта → Object.entries(obj) + for...of
    for (const [k,v] of Object.entries(obj)) { ... } // Удобно для одновременного доступа к ключу и значению


Для проверки наличия предпочтительнее includes (читабельнее, корректно работает с NaN).
Для поиска по условию → find; для получения индекса по условию — findIndex.
Для ненарушения исходного массива использовать немутирующие методы (filter, map, reduce).
${globalVars.codeTextTagClose}
`;

let ArrayMethods = {
    id: "ArrayMethods",
    name: "Выбор метода",
    sub: "",
    descr: data_descr 
};

export { ArrayMethods };