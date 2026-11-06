import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Выбрать приориетные марки + добор до определенного количества из отмеченного
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
В скрипт перед показом добавить
${globalVars.textTagClose}
${globalVars.codeTagOpen}if (Q.isAnswered) return testAnswered(Q); // сохраняем выбор

if (Q.answers.isChecked(99)) {
    return skip;
}

// если нужно исключть код 98
if (Q.answers.isChecked(98) && Q.answers.getCheckedCodes().length === 1) {
    return skip;
}

let b1Answers = b1.answers.getCheckedCodes();
let prior = [1,2,3,6,8,9,10,12,20,26,30,31,32]; // приоритетные категории (выбираются сначала)
let total = 7; // количество отбираемых категорий
let excl = [98,99]; // исключить категории

// 1. Убираем 98 и 99
b1Answers = b1Answers.filter(x => excl.indexOf(x) === -1);

// 2. Делим на приоритетные и остальные, КАЖДУЮ группу перемешиваем
let priorCodes   = shuffle(b1Answers.filter(x => prior.indexOf(x) !== -1));
let noPriorCodes = shuffle(b1Answers.filter(x => prior.indexOf(x) === -1));

// 3. Берём до 7 приоритетных
let finalArr = priorCodes.slice(0, total);

// 4. Если не хватило — добираем из перемешанных остальных
if (finalArr.length < total) {
    let need = total - finalArr.length;
    finalArr = finalArr.concat(noPriorCodes.slice(0, need));
}

Q.answers.hideAll();

finalArr.forEach((code) => {
    Q.answers.show(code);
    Q.answers[code].checked = true;
});

Q.answers.setOrder(b1.getCodes());

function shuffle(arr) {
    
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    return arr;
}

return testAnswered(Q); 
${globalVars.codeTagClose}
`;

let GetPrior = {
    id: "GetPrior",
    name: "Отбор марок (приоритет)",
    sub: "",
    descr: data_descr 
};

export { GetPrior };