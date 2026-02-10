import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.textTagOpen}break — полностью прерывает цикл (выходит из него).
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}for (let i = 1; i <= 5; i++) {
  if (i === 3) break;   // цикл остановится при i = 3
  console.log(i);       // выведет: 1, 2
}
${globalVars.codeTextTagClose}		
${globalVars.textTagOpen}continue — прерывает только текущую итерацию, цикл продолжается со следующего шага.
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // пропустит итерацию для i = 3
  console.log(i);        // выведет: 1, 2, 4, 5
}
${globalVars.codeTextTagClose}		

`;

let BreakCont = {
    id: "BreakCont",
    name: "Break/Continue",
    sub: "",
    descr: data_descr 
};

export { BreakCont };