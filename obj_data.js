import { dataFunctions } from "./pages/Functions.js";
import { AgeRecode } from "./pages/AgeRecode.js";
import { TestingPage } from "./pages/Testing.js";
import { PropQuestion } from "./pages/PropQuestion.js";
import { PropGlobal } from "./pages/PropGlobal.js";
import { PropResponse } from "./pages/PropResponse.js";

const allPagesData = [
dataFunctions, 
AgeRecode,
...TestingPage, 
PropQuestion, 
PropGlobal,
PropResponse
];

export { allPagesData };