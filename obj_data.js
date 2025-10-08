//Functions
import { dataFunctions } from "./pages/Func/Functions.js";
import { AnswerExistsOnly } from "./pages/Func/AnswerExistsOnly.js";

//Lib
import { AgeRecode } from "./pages/Lib/AgeRecode.js";
import { ShowPrevChecked } from "./pages/Lib/ShowPrevChecked.js";
import { CheckPrevChecked } from "./pages/Lib/CheckPrevChecked.js";
import { ShowOnlyCodesByCode } from "./pages/Lib/ShowOnlyCodesByCode.js";
import { VarSubstitution } from "./pages/Lib/VarSubstitution.js";
import { AddImages } from "./pages/Lib/AddImages.js";
import { RotationAnswers } from "./pages/Lib/RotationAnswers.js";
import { ResultsOfScriptExec } from "./pages/Lib/ResultsOfScriptExec.js";

//Testing
import { TestingPage } from "./pages/Testing.js";

//Prop
import { PropQuestion } from "./pages/Prop/PropQuestion.js";
import { PropGlobal } from "./pages/Prop/PropGlobal.js";
import { PropAnswer } from "./pages/Prop/PropAnswer.js";
import { PropAnswerList } from "./pages/Prop/PropAnswerList.js";
import { PropRow } from "./pages/Prop/PropRow.js";
import { PropRowList } from "./pages/Prop/PropRowList.js";
import { PropColumn } from "./pages/Prop/PropColumn.js";
import { PropColumnList } from "./pages/Prop/PropColumnList.js";

const FunctionsData = [
    dataFunctions,
    AnswerExistsOnly
];

const LibData = [
    AgeRecode,
    ShowPrevChecked,
    CheckPrevChecked,
    ShowOnlyCodesByCode,
    VarSubstitution,
    AddImages,
    RotationAnswers,
    ResultsOfScriptExec
];

const PropData = [
    PropQuestion, 
    PropGlobal,
    PropAnswer,
    PropAnswerList,
    PropRow,
    PropRowList,
    PropColumn,
    PropColumnList,
];

const allPagesData = [
    ...FunctionsData,
    ...LibData,
    ...PropData,
    ...TestingPage, 
];

export { allPagesData }