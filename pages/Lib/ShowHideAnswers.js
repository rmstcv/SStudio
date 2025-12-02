import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Показать или скрыть в вопросе только те варианты ответа, которые отметили в предыдущем вопросе
${globalVars.titleTextTagClose}
${globalVars.textTagOpen}
Показываем выбранные ответы
${globalVars.textTagClose}
${globalVars.codeTagOpen}
Q.answers.hideAll();
Q.answers.show(Q1.getCheckedCodes());
return Q.answers.visibleCount > 0 ? ok : skip;
${globalVars.codeTagClose}
${globalVars.codeTagOpen}
Q.answers.showOnly(q1.getCheckedCodes());
return Q.answers.visibleCount > 0 ? ok : skip;
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Скрываем выбранные ответы
${globalVars.textTagClose}
${globalVars.codeTagOpen}
Q.answers.showAll();
Q.answers.hide(q1.getCheckedCodes());
return Q.answers.visibleCount > 0 ? ok : skip;
${globalVars.codeTagClose}
${globalVars.codeTagOpen}
Q.answers.hideOnly(q1.getCheckedCodes());
return Q.answers.visibleCount > 0 ? ok : skip;
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Показываем выбранные строки
${globalVars.textTagClose}
${globalVars.codeTagOpen}
Q.rows.hideAll();
Q.rows.show(q1.getCheckedCodes());
return Q.rows.visibleCount > 0 ? ok : skip;
${globalVars.codeTagClose}
${globalVars.codeTagOpen}
Q.rows.showOnly(q1.getCheckedCodes());
return Q.rows.visibleCount > 0 ? ok : skip;
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Показываем выбранные ответы в таблице
${globalVars.textTagClose}
${globalVars.codeTagOpen}
Q.columns.hideAll();
Q.columns.show(q1.getCheckedCodes());
return Q.columns.visibleCount > 0 ? ok : skip;
${globalVars.codeTagClose}
${globalVars.codeTagOpen}
Q.columns.hideOnly(q1.getCheckedCodes());
return Q.columns.visibleCount > 0 ? ok : skip;
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Два табличных вопроса
${globalVars.textTagClose}
${globalVars.textSubTagOpen}
в Q2 показать только те строки, в которых в Q1 выбраны ответы 1 или 2
${globalVars.textSubTagClose}
${globalVars.codeTagOpen}
Q.rows.hideAll();
for (let row of q1.rows.getVisible()) {
    if (row.isChecked(1) || row.isChecked(2)) {
        Q.rows.show(row.code);
    }
}
return Q.rows.visibleCount > 0 ? ok : skip;
${globalVars.codeTagClose}
${globalVars.codeTagOpen}
Q.rows.showOnly(Q1.rows.getVisibleCodes()
                .filter(rc => Q1.rows[rc].isChecked(1) || Q1.rows[rc].isChecked(2)));
return Q.rows.visibleCount > 0 ? ok : skip;
${globalVars.codeTagClose}
${globalVars.textTagOpen}
Показ ответов в порядке выбора
${globalVars.textTagClose}
${globalVars.codeTagOpen}
Q.answers.showOnly(Q1.answers.getCheckedCodes());
Q.answers.setOrder(Q1.answers.getCheckedOrderedCodes());
${globalVars.codeTagClose}
`;

let ShowHideAnswers = {
    id: "ShowHideAnswers",
    name: "Показать/скрыть ответы",
    sub: "",
    descr: data_descr 
};

export { ShowHideAnswers };