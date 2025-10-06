import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.textTagOpen}В Функции добавить${globalVars.textTagClose}
${globalVars.codeTagOpen}function AnswerExistsAny(qTarget, codes) {
    let check = false;
    let arr_codes = codes.split(",");
    arr_codes.forEach(code => {
        if (qTarget.isChecked(parseInt(code))) check = true;
    });
    return check;
}

function testAnswered(Q) {
    if (isTesting()) {
        let text = "&lt;font color='red'&gt;ЭКРАН БУДЕТ ВИДЕН ТОЛЬКО НА ТЕСТОВОЙ ССЫЛКЕ&lt;/font&gt;&lt;br&gt;" + Q.text;
        Q.text = text;
        return ok;
    } else {
        return answered;
    };
};

function screenOut() {
    if (isTesting()) {
        return error('Тестовое интервью! Выход по скринауту.');
    } else {
        return exitWithResult(InterviewResult.Screening);
    };
};

function AnswerExistsAny(qTarget, codes) {
    let check = false;
    let arr_codes = codes.split(",");
    arr_codes.forEach(code => {
        if (qTarget.isChecked(parseInt(code))) check = true;
    });
    return check;
};

function addImages(Q, name, placement) {
    let objName;
    switch (Q.type) {
        case QuestionTypeIds.SingleChoice:
        case QuestionTypeIds.MultipleChoice:
        case QuestionTypeIds.Ranking:
            objName = 'answers';
            break;

        case QuestionTypeIds.Table_Text:
        case QuestionTypeIds.Table_Numeric:
        case QuestionTypeIds.Table_SingleChoice:
        case QuestionTypeIds.Table_MultipleChoice:
        case QuestionTypeIds.Table_Rating:
        case QuestionTypeIds.Table_Slider:
        case QuestionTypeIds.GrouppingAndRanking:
            objName = 'rows';
            break;
        
        case QuestionTypeIds.MaxDiff:
            objName = 'columns';
            break;

        default:
            return;
    };

    if (name === undefined) name = '';

    for (let A of Q[objName].getVisible()) {
        if (A.image !== undefined) continue;

        A.image = images[name + A.code];
        A.imagePlacement = placement ? placement : ImagePlacementIds.Default;
    };
};
${globalVars.codeTagClose}
`;

let dataFunctions = {
    id: "Functions",
    name: "Добавить функции",
    sub: "",
    descr: data_descr
};

export { dataFunctions };