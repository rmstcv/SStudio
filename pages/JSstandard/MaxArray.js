import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.textTagOpen}Найти масиив максимальной длины
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}const arrays = [
    [101, 102, 103],
    [201, 202],
    [301, 302, 303, 304, 305]
];

// Находим массив с максимальной длиной
let maxArray = arrays[0];

for (let i = 1; i < arrays.length; i++) {
    if (arrays[i].length > maxArray.length) {
        maxArray = arrays[i];
    }
}

console.log(maxArray); // [301, 302, 303, 304, 305]
console.log(maxArray.length); // 5
${globalVars.codeTextTagClose}		
`;

let MaxArray = {
    id: "MaxArray",
    name: "Массив макс длины",
    sub: "",
    descr: data_descr 
};

export { MaxArray };