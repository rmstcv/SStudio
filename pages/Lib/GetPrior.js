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
${globalVars.codeTagClose}${globalVars.titleTextTagOpen}
Выбрать приориетные марки + добор + открытые в конце
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
В скрипт перед показом добавить
${globalVars.textTagClose}
${globalVars.codeTagOpen}// if (Q.isAnswered) return testAnswered(Q); // сохраняем выбор
Q.answers.setOrder(sr1.answers.getCodes());
let objName = 'answers';

Q[objName].hideAll();

let prior1 = [];
let prior2 = [];
let total = 2; // количество отбираемых категорий
let finalArr = [];
let priorMarks = [22,25];
let special = [96,97,98];   // эти коды в prior2 — в последнюю очередь

for (let A of sr1.getChecked()) {

    if (priorMarks.indexOf(A.code) !== -1) {
        
         if (sr21.rows[A.code].answers[1].openValueNum > 0 ) {
            prior1.push(A.code);
        }
    }

    if (priorMarks.indexOf(A.code) === -1) {
        
         if (sr21.rows[A.code].answers[1].openValueNum > 0 ) {
            prior2.push(A.code);
        }
    }
}

//ПРИОРИТЕТ 1
finalArr = prior1.slice(0, total);

//ПРИОРИТЕТ 2
if (finalArr.length < total) {
    // Сначала обычные (без 97/98/99), перемешанные
    let prior2Normal = shuffle(prior2.filter(x => special.indexOf(x) === -1));
    let prior2Special = shuffle(prior2.filter(x => special.indexOf(x) !== -1));
    
    let need = total - finalArr.length;
    finalArr = finalArr.concat(shuffle(prior2Normal).slice(0, need));

    // Если всё ещё не хватает — добираем из 96/97/98
    if (finalArr.length < total) {
        need = total - finalArr.length;
        finalArr = finalArr.concat(prior2Special.slice(0, need));
    }
}

//ПРИОРИТЕТ 3
if (finalArr.length < 1) {
    return skip;
}

for (let A of finalArr) {

    Q.answers.show(A);
    Q.answers[A].checked = true;
    
    if (sr1.answers[A].settings.openValueTxt) {
        Q.answers[A].openValueTxt = sr1.answers[A].openValueTxt;
    }
}

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
${globalVars.codeTagClose}${globalVars.titleTextTagOpen}
Более сложный отбор
${globalVars.titleTextTagClose}
${globalVars.codeTagClose}${globalVars.titleTextTagOpen}
ВСЕГО ОТБИРАЕТСЯ 3 МАРКИ
ПРИОРИТЕТ 1: МАРКИ ЗА ПОСЛЕДНИЙ МЕСЯЦ SR3, 1 МАРКА - PRO PLAN (КОД 22), 2 МАРКА – ROYAL CANIN (КОД 25), 3 МАРКА – СЛУЧАЙНЫМ ОБРАЗОМ ИЗ МАРОК ЗА ПОСЛЕДНИЙ МЕСЯЦ
ПРИОРИТЕТ 2: ЕСЛИ НЕТ МАРОК ROYAL CANIN (КОД 25), PRO PLAN (КОД 22) ЗА ПОСЛЕДНИЙ МЕСЯЦ, ТО ЛЮБЫЕ МАРКИ ЗА ПОСЛЕДНИЙ МЕСЯЦ SR3 РАНДОМНО.
ПРИОРИТЕТ 3. ЕСЛИ МАРОК ЗА ПОСЛЕДНИЙ МЕСЯЦ МЕНЬШЕ 3-Х, ТО ДОБАВЛЯЕМ К НИМ МАРКИ ЗА ПОЛГОДА SR1 В ТАКОМ ЖЕ ПРИОРИТЕТЕ (1, 2) ТОЛЬКО ЗА ПОЛГОДА.
${globalVars.titleTextTagClose}
${globalVars.codeTagOpen}let TOTAL = 3;
let PRIMARY_MARKS = [22, 25];
let BLACKLIST = [93, 94, 95, 96, 97, 98, 99];
// let BLACKLIST = [99]; // добавить если нужно добрать из OTHERCODES
// let OTHERCODES = [93, 94, 95, 96, 97, 98]; // добавить если нужно добрать из OTHERCODES
if (!Q.isAnswered) {

    let priority1 = [];

    // ---------- ЭТАП 1: SR3 ----------
    let sr3All = sr3.answers.getCheckedCodes().filter(x => BLACKLIST.indexOf(x) === -1);

    // П1: 22 → 25 → (если нет — вырожденный случай П2)
    let sr3Prior = PRIMARY_MARKS.filter(m => sr3All.indexOf(m) !== -1);
    priority1 = priority1.concat(sr3Prior.slice(0, TOTAL));   // ← slice на всякий

    // П2: если не хватило — случайные из SR3
    if (priority1.length < TOTAL) {
        let need = TOTAL - priority1.length;
        let sr3Rest = shuffle(sr3All.filter(x =>
            priority1.indexOf(x) === -1 //&& OTHERCODES.indexOf(x) === -1  // добавить если нужно добрать из OTHERCODES
        ));
        priority1 = priority1.concat(sr3Rest.slice(0, need));
    }

    // ---------- ЭТАП 2: SR1 (П3) ----------
    if (priority1.length < TOTAL) {

        let sr1All = sr1.answers.getCheckedCodes()
            .filter(x => BLACKLIST.indexOf(x) === -1)
            .filter(x => priority1.indexOf(x) === -1);   // уже взятые не нужны

        // 22 → 25 из SR1, которых ещё нет в priority1
        let need = TOTAL - priority1.length;
        let sr1Prior = PRIMARY_MARKS.filter(m =>
            sr1All.indexOf(m) !== -1 && // добавляем в приорите 22 и 25
            priority1.indexOf(m) === -1 // если их нет уже в priority1
        );
        priority1 = priority1.concat(sr1Prior.slice(0, need));   // ← ФИКС

        // добираем случайными из SR1
        if (priority1.length < TOTAL) {
            need = TOTAL - priority1.length;
            // let sr1Rest = shuffle(sr1All.filter(x => priority1.indexOf(x) === -1));
            let sr1Rest = shuffle(sr1All.filter(x =>
                priority1.indexOf(x) === -1 // && OTHERCODES.indexOf(x) === -1 //// добавить если нужно добрать из OTHERCODES
            ));
            priority1 = priority1.concat(sr1Rest.slice(0, need));
        }
    }

    // ---------- ЭТАП 3: OTHERCODES — только отмеченные, самый низкий приоритет ----------
    // добавить если нужно добрать из OTHERCODES
    
    // if (priority1.length < TOTAL) {
    //     let need = TOTAL - priority1.length;
    //     let otherRest = shuffle(
    //         sr3All.concat(sr1.answers.getCheckedCodes())
    //             .filter(x =>
    //                 OTHERCODES.indexOf(x) !== -1 &&
    //                 BLACKLIST.indexOf(x) === -1 &&
    //                 priority1.indexOf(x) === -1
    //             )
    //     );
    //     priority1 = priority1.concat(otherRest.slice(0, need));
    // }
    
    // ---------- ПРИМЕНЯЕМ ----------
    
    for (let code of priority1) {
        if (Q.answers[code]) {
            Q.answers[code].checked = true;
            
            if (Q.answers[code].settings.openValueTxt) {
                Q.answers[code].openValueTxt = sr1.answers[code].openValueTxt;
            }
        }
    }
    Q.answers.showOnly(priority1);
}

return Q.answers.visibleCount > 0 ? testAnswered(Q) : skip;

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    return arr;
}

return Q.answers.visibleCount > 0 ? testAnswered(Q) : skip;
${globalVars.codeTagClose}
`;

let GetPrior = {
    id: "GetPrior",
    name: "Отбор марок (приоритет)",
    sub: "",
    descr: data_descr 
};

export { GetPrior };