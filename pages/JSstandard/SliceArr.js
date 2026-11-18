import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.textTagOpen}Возвращает новый массив с элементами от индекса begin (включительно) до end (не включительно)
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}[1,2,3,4].slice(1,3); // [2,3]
[1,2,3,4].slice(-2); // [3,4]
[1,2,3,4].slice(); // копия: [1,2,3,4]
"hello".slice(1,4); // "ell"
"hello".slice(-2); // "lo"
${globalVars.codeTextTagClose}		
`;

let SliceArr = {
    id: "SliceArr",
    name: "Slice",
    sub: "",
    descr: data_descr 
};

export { SliceArr };