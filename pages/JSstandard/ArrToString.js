import globalVars from "../../globalVars.js";

let data_descr = `
${globalVars.textTagOpen}Преобразовать массив в строку
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}[1,2,3].join(); // "1,2,3"
${globalVars.codeTextTagClose}		
${globalVars.textTagOpen}
Преобразовать строку в массив
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}let s = "1,2,3";
let arr = s.split(',').map(Number); // [1, 2, 3] (или .map(x => Number(x)))
${globalVars.codeTextTagClose}
`;

let ArrToString = {
    id: "ArrToString",
    name: "Массив в строку и обратно",
    sub: "",
    descr: data_descr 
};

export { ArrToString };