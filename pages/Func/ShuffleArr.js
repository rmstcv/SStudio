import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Перемешать массив случайно (Fisher–Yates)
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
заменяет встроенный метод в SS randomizeArray()
${globalVars.textTagClose}
${globalVars.codeTagOpen}
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    return arr;
}
${globalVars.codeTagClose}
`;

let ShuffleArr = {
    id: "ShuffleArr",
    name: "Перемешать массив",
    sub: "",
    descr: data_descr 
};

export { ShuffleArr };