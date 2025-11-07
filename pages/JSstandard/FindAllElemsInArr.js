import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}Вернуть массив всех совпадающих элементов
${globalVars.titleTextTagClose}
${globalVars.codeTextTagOpen}const a = [1,2,3];
const other = [3,7];
const matches = other.filter(x => a.indexOf(x) !== -1); // [3]

[3,7].filter(x => [1,2,3].indexOf(x) !== -1); // [3]

${globalVars.codeTextTagClose}
${globalVars.textTagOpen}замена через цикл
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}
function filterCompat(arr, predicate) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i in arr && predicate(arr[i], i, arr)) res.push(arr[i]);
  }
  return res;
}
${globalVars.codeTextTagClose}
`;

let FindAllElemsInArr = {
    id: "FindAllElemsInArr",
    name: "Найти все элементы",
    sub: "",
    descr: data_descr 
};

export { FindAllElemsInArr };