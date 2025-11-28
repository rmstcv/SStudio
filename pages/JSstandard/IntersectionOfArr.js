import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}Проверить, что в массиве A есть элемент, который совпадает с любым элементом из массива B по условию
${globalVars.titleTextTagClose}
${globalVars.codeTextTagOpen}const A = [3,7,9];
const B = [1,3];

const exists = B.some(function(b) {
  return A.indexOf(b) !== -1;
});

${globalVars.codeTextTagClose}
${globalVars.textTagOpen}C явным циклом (без some):
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}var exists = false;

for (var i = 0; i < B.length; i++) {
  if (A.indexOf(B[i]) !== -1) {
    exists = true;
    break;
  }
}
${globalVars.codeTextTagClose}
${globalVars.textTagOpen}Для объектов по ключу, ES5-подход:
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}var A = [{id:1},{id:3}];
var B = [{ref:3},{ref:5}];

var exists = B.some(function(b) {
  return A.some(function(a) {
    return a.id === b.ref;
  });
});
${globalVars.codeTextTagClose}
${globalVars.textTagOpen}Или без some полностью:
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}var exists = false;

for (var i = 0; i < B.length; i++) {
  for (var j = 0; j < A.length; j++) {
    if (A[j].id === B[i].ref) {
      exists = true;
      break;
    }
  }
  if (exists) break;
}
${globalVars.codeTextTagClose}
`;

let IntersectionOfArr = {
    id: "IntersectionOfArr",
    name: "Найти пересечение",
    sub: "",
    descr: data_descr 
};

export { IntersectionOfArr };