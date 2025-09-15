import {allPagesData} from './obj_data.js'
// import {funcData} from './obj_data_func.js'

const allData = [...allPagesData]
// const allData = [...allPagesData, ...funcData]

// function getObj(obj) {
//     let targetObj = {}
//     allData.forEach((dataObj) => {

//         if (`${dataObj.id}` === obj) {
//             targetObj = dataObj
//         }
//     }) 
//     return targetObj
// }

let setHash = (elem) => {
    if (elem && elem.hasAttribute("data-object_id")) {
        const newHash = elem.getAttribute("data-object_id");
        
        if (window.location.hash !== `#${newHash}`) {
            window.location.hash = newHash; // Устанавливаем новый hash
        }
    } else {
        console.error("Элемент не найден или не имеет атрибута 'data-object_id'");
    }
};

//   function getDescr(obj) {
//     let mokup = ''
//      mokup = `
//       <div class="obj_descr">${obj.descr.descr}</div>
//       <div class="obj_info">${obj.descr.info}</div>
//       <div class="obj_ex">${obj.descr.ex}</div>
//     `  
//     return mokup
//   }

// function getDescr(obj) {
// let mokup = ''
//     mokup = `
//     <div class="obj_descr">${obj.descr}</div>
// `  
// return mokup
// }

function getObj(obj) {
    let targetObj = {}
    allData.forEach((dataObj) => {
        
        if (`${createObjectFromValues(dataObj).id}` === obj) {
            targetObj = dataObj
        }
    }) 
    return targetObj
}

// function getDescr(obj) {
// let mokup = ''
//     mokup = `
//     <div class="obj_descr">
//         <div class="codeblock-wrapper">
//             <pre class="codeblock">
//                 <code>${obj.descr}</code>
//             </pre>
//         </div>
//     </div>
// `  
// return mokup
// }

function getDescr(obj) {
    let mokup = ''
        mokup = `
        <div class="obj_descr">
            ${obj.descr}
        </div>
    `  
    return mokup
}

function createObjectFromValues(obj = {}) {
    const [id = "", name = "", sub = "", descr = ""] = Object.values(obj);
    return { id, name, sub, descr };
}

export {setHash, getObj, getDescr}