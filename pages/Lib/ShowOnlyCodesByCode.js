import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Фильтровать ответы по выбранному в указанном вопросе ответу.
${globalVars.titleTextTagClose}
${globalVars.textSubTagOpen}
Этот скрипт перед показом удобно использовать вместе с большим списком ответов, в котором коды неупорядочены. В функцию showOnlyCodesByCode() можно передавать как один код, так и массив кодов.
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
// можно менять на 'rows' или 'columns' в зависимости от того, что нужно показать
let objName = 'answers';

let codes = {
    1: [ 1456 ], // если выбран код 1, то показать код 1456
    12: [ [1449, 1455] ], // если выбран код 12 - показать все коды с 1449 по 1455
    34: [ 290, [815, 877], 916 ], // выбран 34 - показать 290, 916 и все с 815 по 877
};

showOnlyCodesByCode(Q560.getCheckedCode());

return Q[objName].visibleCount > 0 ? ok : skip;

// ----------------------------------------
function showOnlyCodesByCode(parameter) {
    Q[objName].hideAll();

    switch (typeof parameter) {
        case 'number':
            showAnswers(parameter);
            break;

        case 'object':
            for (let code of parameter) {
                showAnswers(code);
            }
            break;
    }

    function showAnswers(code) {
        if (!(code in codes)) return;

        for (let elem of codes[code]) {
            switch (typeof elem) {
                case 'number':
                    Q[objName].show(elem);
                    break;

                case 'object':
                    Q[objName].showFromTo(elem[0], elem[1]);
                    break;
            }
        }
    }
}
${globalVars.codeTagClose}
`;

let ShowOnlyCodesByCode = {
    id: "ShowOnlyCodesByCode",
    name: "Фильтровать ответы..",
    sub: "",
    descr: data_descr 
};

export { ShowOnlyCodesByCode };