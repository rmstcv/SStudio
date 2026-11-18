import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Проверка нескольких пар условий
${globalVars.titleTextTagClose}
${globalVars.textSubTagOpen}
Проверить что хотя бы одно из условий соблюдается:
S5=1 И Q6=1
S5=2 И Q6=2
S5=3 И Q6=3
S5=4 И Q6=4,6
S5=5 И Q6=5
S5=1 И Q6=8 
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
let s5Checked = s5.answers.getCheckedCodes();
let q6Checked = q6.answers.getCheckedCodes();

let s5Answer = s5Checked[0];
let q6Answer = q6Checked[0];

let validPairs = [
    [1, 1], [2, 2], [3, 3], [4, 4], [4, 6], [5, 5], [1, 8]
];

let isMatch = validPairs.some(pair => pair[0] === s5Answer && pair[1] === q6Answer);
//ВНИМАНИЕ S5 И Q6 СИНГЛ, для малтипл поменять на 
//let q6Answers = q6Checked;
//let isMatch = validPairs.some(pair => pair[0] === s5Answer && (q6Answers.indexOf(pair[1]) !== -1)); 

if (isMatch) {
    // Если хотя бы одна пара совпала → делаем что-то
    Q.answers[1].checked = true;
} else {
    Q.answers[2].checked = true;
}
${globalVars.codeTagClose}
`;

let SomeConditions = {
    id: "SomeConditions",
    name: "Пары условий",
    sub: "",
    descr: data_descr 
};

export { SomeConditions };