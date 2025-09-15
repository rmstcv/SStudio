// import { dataTesting } from "./pages/testing.js";
// import { dataTesting2 } from "./pages/testing2.js";
import { dataFunctions } from "./pages/Functions.js";
import { AgeRecode } from "./pages/AgeRecode.js";
import { TestingPage } from "./pages/Testing.js";
import { PropQuestion } from "./pages/PropQuestion.js";


const allPagesData = [dataFunctions, AgeRecode, ...TestingPage, PropQuestion]
// const allPagesData = [...dataSide, ...dataSide2,...dataTesting, ...dataTesting2, dataFunctions, AgeRecode]

export {
    allPagesData
}
