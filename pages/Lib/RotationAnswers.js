import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Ротация вариантов ответа.
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
Ротация ответов
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}
Q.answers.randomize();
Q.answers.randomize([1,3,5,7]);
Q.answers.randomizeFromTo(10, 20);
${globalVars.codeTextTagClose}
${globalVars.textTagOpen}
Ротация группами
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
Можно добавить проверку if (!Q.isAnswered) {Q.answers.randomizeGroups([..])}, что бы при возврате назад сохранялась ротация и не было ошибки в некотрых случаях при нажатии кнопки Назад (TypeError: Ответ с кодом .. попадает в несколько групп.).

Если нужно перемешать ответы группами, коды которых идут не по порядку, то нужно упорядочить их в списке в такой последовательности, в которой их нужно перемешать. Напрмер, если порядок категорий в списке 1,2,13,14,3,4,5, то Q.answers.randomizeGroups([[1,13], [14,5]]) перемешает группы 1,2,13 и 14,3,4,5.
${globalVars.textSubTagClose}
${globalVars.textSubTagOpen}
При ротации можно проверить, что вопрос не был уже отвечен, что бы сохранить ротацию при возврате назад:
if (!Q.isAnswered) {Q.answers.randomizeGroups([])} 
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
Q.answers.randomizeGroups([[1,2], [3,8], [9,9]]); //перемешать группы
Q.answers.randomize([1,2]); //перемешать ответы внутри групп
Q.answers.randomize([3,8]);
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Сохранить порядок
${globalVars.textTagClose}
${globalVars.codeTagOpen}
Q.answers.setOrder(Q1.getCodes()) //сохранить порядок ответов в текущем вопросе как в Q1
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Ротация в циклах
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
Варианты ответов в циклах необходимо ротировать в глобальном скрипте перед показом
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
questions.repeat(23, 23, 41);
Q41.getCodes().forEach((code) => questions[230 + code].randomize()); // перемешать ответы в вопросе Q23
questions.repeat(24, 24, 41);
Q41.getCodes().forEach((code) => questions[240 + code].answers.setOrder(questions[230 + code].getCodes())); // порядок ответов в Q24 как в Q23
${globalVars.codeTagClose}
${globalVars.textSubTagOpen}
Одинаковая ротация во всем цикле
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
questions.repeat(11, 11, 10);

let q6Codes = q6.getCodes();

if (q6Codes.length > 0 ) {
    let firstQ6Code = q6Codes[0];
    let firstS1x = questions[1100 + firstQ6Code];

    firstS1x.answers.randomizeGroups([[100,6], [200,30]]);
    firstS1x.answers.randomizeFromTo(1,6);
    firstS1x.answers.randomizeFromTo(5,30);

    let orderS1xCodes = questions[1100 + firstQ6Code].getCodes();
    
    for (let i = 1; i < q6Codes.length; i++) {
        const q6Code = q6Codes[i];
        const s1x = questions[1100 + q6Code];
        s1x.answers.setOrder(orderS1xCodes);
    }
}
${globalVars.codeTagClose}
`;

let RotationAnswers = {
    id: "RotationAnswers",
    name: "Ротация",
    sub: "",
    descr: data_descr 
};

export { RotationAnswers };