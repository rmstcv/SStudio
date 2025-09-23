import { dataFunctions } from "./pages/Functions.js";
import { AgeRecode } from "./pages/AgeRecode.js";
import { TestingPage } from "./pages/Testing.js";
import { PropQuestion } from "./pages/Prop/PropQuestion.js";
import { PropGlobal } from "./pages/Prop/PropGlobal.js";
import { PropAnswer } from "./pages/Prop/PropAnswer.js";
import { PropAnswerList } from "./pages/Prop/PropAnswerList.js";
import { PropRow } from "./pages/Prop/PropRow.js";
import { PropRowList } from "./pages/Prop/PropRowList.js";
import { PropColumn } from "./pages/Prop/PropColumn.js";
import { PropColumnList } from "./pages/Prop/PropColumnList.js";

const allPagesData = [
    dataFunctions, 
    AgeRecode,
    ...TestingPage, 
    PropQuestion, 
    PropGlobal,
    PropAnswer,
    PropAnswerList,
    PropRow,
    PropRowList,
    PropColumn,
    PropColumnList
];

export { allPagesData };