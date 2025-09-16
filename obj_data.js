import { dataFunctions } from "./pages/Functions.js";
import { AgeRecode } from "./pages/AgeRecode.js";
import { TestingPage } from "./pages/Testing.js";
import { PropQuestion } from "./pages/PropQuestion.js";


const allPagesData = [dataFunctions, AgeRecode, ...TestingPage, PropQuestion];

export {
    allPagesData
};