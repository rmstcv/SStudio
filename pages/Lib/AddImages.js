import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Добавление изображений.
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
В вопрос:
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}
Q.image = images['Изображение1']; // добаляет Изображение1.jpg
Q.imagePlacement = ImagePlacementIds.Right; // Before - над текстом. After - под текстом. Left - слева от текста. Right - справа от текста.
Q.image = images['Изображение_' + Q.number % 100]; // в цикле
${globalVars.codeTextTagClose}
${globalVars.textTagOpen}
В ответ:
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}
Q.answers[1].image = images['Упаковка 1'];
Q.answers[1].imagePlacement = ImagePlacementIds.Before;
Q.row[5].image = images['Лого1'];
Q.row[5].image = Q34[5].image;
${globalVars.codeTextTagClose}
${globalVars.textTagOpen}
Через функцию:
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}
addImages(Q); // когда в названии есть только код (просто число: 1, 2…, 46…)
addImages(Q, 'Лого_'); // можно добавлять в название перед кодом какой-либо идентификатор
addImages(Q, 'Лого_', ImagePlacementIds.Right); // в функцию можно передать и расположение картинок относительно текста
${globalVars.codeTextTagClose}
${globalVars.codeTagOpen}
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
    }

    if (name === undefined) name = '';

    for (let A of Q[objName].getVisible()) {
        if (A.image !== undefined) continue;

        A.image = images[name + A.code];
        A.imagePlacement = placement ? placement : ImagePlacementIds.Default;
    }
}
${globalVars.codeTagClose}
`;

let AddImages = {
    id: "AddImages",
    name: "Изображения",
    sub: "",
    descr: data_descr 
};

export { AddImages };