import { setHash, getObj, getDescr } from './model.js';
import { HEADER_NAV_ITEMS } from './data_header.js';

const class_header_tab = "header_nav_item";
const class_side_tab = "side_menu_item";
const class_side_tab_active = "side_nav_item__active";
const data_id = "data-object_id";
const class_header_tab_active = "header_nav_item__active";
const class_main_item = "main_item";
const class_main_item_active = "main_item__active";
const class_main_item_name = "main_item_name";
const class_main_item_descr = "main_item_descr";
const class_main_item_name_active = "main_item_name__active";
const main_menu_elem = document.querySelector(".main_menu");
const PADDING_LEFT = 1;

let isUpdatingHash = false;

function createHeader () {
  let div;
  main_menu_elem.innerHTML = "";

  HEADER_NAV_ITEMS.forEach((item) => {
    div = document.createElement("div");
    div.classList.add(class_header_tab, "menu_item");
    div.setAttribute(data_id, `${item.obj_id}`);
    div.innerHTML = item.object_name;
    main_menu_elem.appendChild(div);
  });
};

function setActiveTabHeader(headerElem) {
  if (headerElem.classList.contains(class_header_tab) && !(headerElem.classList.contains(class_header_tab_active))) {

    if (document.querySelector(`.${class_header_tab_active}`)) {
      document.querySelector(`.${class_header_tab_active}`).classList.remove(class_header_tab_active);
    };
    headerElem.classList.add(class_header_tab_active);
  };
};

function createSideNav(activeHeaderId) {

  let activeHeader = activeHeaderId ? activeHeaderId : document.querySelector(`.${class_header_tab_active}`).getAttribute(data_id);
  const side_menu_elem = document.querySelector(".side_menu");
  let sideItems;

  HEADER_NAV_ITEMS.forEach((item) => {

    if (item.obj_id === activeHeader) {
      sideItems = item.properties.split(",");
    };
  });
  side_menu_elem.innerHTML = "";
  let div;

  sideItems.forEach((item) => {
    item = item.trim();
    div = document.createElement("div");
    div.classList.add(class_side_tab);
    div.setAttribute(data_id, `${item}`);
    let currentObj = getObj(item);
    div.innerHTML = currentObj.name; // side bar name
    side_menu_elem.appendChild(div);
  });
  document.querySelectorAll(`.${class_side_tab}`)[0].classList.add(class_side_tab_active);
};

function getElemById(elementId) {
  return document.querySelector(`[data-object_id="${elementId}"]`);
};

function getIdByElem(element) {
  return element.getAttribute(data_id);
};

function setActiveTabSide(elementId) {

  let element = getElemById(elementId);

  if (element.classList.contains(class_side_tab) && !(element.classList.contains(class_side_tab_active))) {
    
    if (document.querySelector(`.${class_side_tab_active}`)) {
      document.querySelector(`.${class_side_tab_active}`).classList.remove(class_side_tab_active);
    }
    element.classList.add(class_side_tab_active);
  };
};

function createMainPage() {
  const main_page_elem = document.querySelector(".container_content");
  const side_active_elem = document.querySelector(`.${class_side_tab_active}`);
  
  let obj_item_id = side_active_elem.getAttribute(data_id);
  let div;
  main_page_elem.innerHTML = "";
  const currentObj = getObj(obj_item_id);
  
  main_page_elem.innerHTML = `<div class=${class_main_item_descr}>${getDescr(currentObj)}</div></br>`;
  console.log(obj_item_id);
  let mainItems = currentObj.sub.split(", ");
  
  let currentObjSub = "";
  
  mainItems.forEach((mainItem) => {
    currentObjSub = getObj(`${mainItem}`);   
    div = document.createElement("div");
    if (currentObjSub.id) {
      div.classList.add("root_main_item");
      div.classList.add(class_main_item);
      div.setAttribute(data_id, `${currentObjSub.id}`);
      div.innerHTML = `<div class="${class_main_item_name}" style="padding-left:${PADDING_LEFT}em;">${currentObjSub.name}</div>`;
      main_page_elem.appendChild(div);
    } ;
  });
  addCopyButton();
};

function renderSubItem(parentItemElem, parentItemId) {
  let divMain;
  const parentObj = getObj(parentItemId);
  let classColor = `${class_main_item}_red`;
  let spaces = PADDING_LEFT;
  let descrMain_elem = document.createElement("div");
  descrMain_elem.innerHTML = `${getDescr(parentObj)}`;
  descrMain_elem.classList.add(class_main_item_descr);
  descrMain_elem.style.paddingLeft = `${spaces.toString()}em`;
  parentItemElem.appendChild(descrMain_elem);
  let subItems = parentObj.sub.split(", ");

  if (parentObj.sub) {
    subItems.forEach((mainItem) => {
      let currentObjSub = getObj(`${mainItem}`);
      divMain = document.createElement("div");
      divMain.classList.add(class_main_item);
      divMain.setAttribute(data_id, `${currentObjSub.id}`);
  
      if (parentItemElem.classList.contains("main_item_red")) {
        classColor = "main_item_blue";
      };
      divMain.innerHTML = `<div class="${class_main_item_name}" style="padding-left:${spaces}em;">${currentObjSub.name}</div>`;
      parentItemElem.appendChild(divMain);
      divMain.classList.add(classColor);
    });
  };
};

function showSubItems(elemSub) {
  const parentElem = elemSub.closest(".main_item");
  
  if (parentElem && elemSub.classList.contains(class_main_item_name)) {
    const parentElemId = parentElem.getAttribute(data_id);
    
    if (!parentElem.classList.contains(class_main_item_active)) {
      let prevMainActive = document.querySelector(`.${class_main_item_active}`);

      if (prevMainActive) {
        prevMainActive.classList.remove(class_main_item_active);
        prevMainActive.innerHTML =`<div class="${class_main_item_name}" style="padding-left:${PADDING_LEFT}em;">${getObj(prevMainActive.getAttribute(data_id)).name}</div>`;
      };
      parentElem.classList.add(class_main_item_active);
      renderSubItem(parentElem, parentElemId);
    } else {     
      let objMain = getObj(parentElemId);
      let spaces = PADDING_LEFT;
      parentElem.classList.remove(class_main_item_active);
      parentElem.innerHTML = `
      <div class="${class_main_item_name}" style="padding-left:${spaces}em;">${objMain.name}</div>
      `;
    };
    addCopyButton();
  };
};

function setCurrentHash(elem) {  
  removeHashChangeListener();
  setHash(elem);
  window.addEventListener('hashchange', hashChangeHandler);
};

function renderHeaderTabs(idElem) {
  let element = getElemById(idElem);
  setActiveTabHeader(element);
  createSideNav();
  setActiveTabSide(idElem);
  createMainPage();
  setCurrentHash(element);
};

function renderSideTabs(idElem) {
  let element = getElemById(idElem);
  setActiveTabSide(idElem);
  createMainPage();
  setCurrentHash(element);
};

function renderMainItems(mainItemId) {
  let mainContentItem = getElemById(mainItemId);
  showSubItems(mainContentItem.querySelector(`.${class_main_item_name}`));
  
  if (mainContentItem  && mainContentItem.classList.contains(class_main_item_active)) {
    setCurrentHash(mainContentItem);
  } else {      
    setCurrentHash(document.querySelector(`.${class_side_tab_active}`));
  };
};

function addMainListener() {
  document.addEventListener("click", (e) => {
    let idElem = getIdByElem(e.target);

    if (e.target.classList.contains(class_header_tab)  && !e.target.classList.contains(class_header_tab_active)) { 
      renderHeaderTabs(idElem);
    };

    if (e.target.classList.contains(class_side_tab) && !e.target.classList.contains(class_side_tab_active)) {
      renderSideTabs(idElem);
    };

    if (e.target.classList.contains(class_main_item_name) && !e.target.classList.contains(class_main_item_name_active)) {
      let mainItem = e.target.closest(`.${class_main_item}`)  ;
      renderMainItems(getIdByElem(mainItem));
    };

    if (e.target.classList.contains("clickBtn")) {
      let elemForCopy = e.target.previousElementSibling;
      
      if (elemForCopy && elemForCopy.classList.contains('codeblock')) {
        navigator.clipboard.writeText(elemForCopy.textContent);
      };
    };
    isUpdatingHash = false;
  });
};

function initPage(hash) {
  createHeader();

  if (hash) {
    initHash(hash);
  } else {
    const initHeaderId = getIdByElem(document.querySelectorAll(`.${class_header_tab}`)[0]);
    renderHeaderTabs(initHeaderId);
    setHash(getElemById(initHeaderId));
  };
};

function initListeners() {
  addMainListener();
  window.addEventListener('hashchange', hashChangeHandler);
}

const hashChangeHandler = () => {

  if (isUpdatingHash) {
    initHash();
  };
  isUpdatingHash = true;
};

const removeHashChangeListener = () => {
  window.removeEventListener('hashchange', hashChangeHandler);
};

function initHash(hashInit) {

  let hash = window.location.hash.substring(1);
  let searchElem;
  
  if (hashInit) {
    hash = hashInit;
  };

  if (hash) {
    const element = getElemById(hash);
    
    if (element && element.classList.contains(class_side_tab)) { //если повезло и элемент уже отрендерен на странице в сайде
      renderSideTabs(hash);
    };

    if (element && element.classList.contains(class_header_tab)) { //если повезло и элемент уже отрендерен на странице хэдэре
      renderHeaderTabs(hash);
    } 
    searchElem = element;

    if (!element) {   
      document.querySelectorAll(`.${class_header_tab}`).forEach((subElem) => {
        let objId = subElem.getAttribute(data_id);
        HEADER_NAV_ITEMS.forEach((headerItem) => {

          if (headerItem.obj_id == objId) { //поиск в сайдах
            headerItem.properties.split(",").forEach((item) => {
              
              if (item.trim() == hash) {            
                searchElem = subElem;
                renderHeaderTabs(headerItem.obj_id);
                renderSideTabs(hash);
              } else { //поиск в сабах

                if (getObj(item.trim()).sub) {
                  getObj(item.trim()).sub.split(", ").forEach((subItem) => {
                    
                    if (subItem == hash) {                 
                      searchElem = subItem;
                      renderHeaderTabs(headerItem.obj_id);
                      renderSideTabs(item.trim());
                      renderMainItems(hash);
                    };
                  });
                };
              };
            });
          };
        });
      });
    };
  };

  if (!searchElem) { 
    const initHeaderId = getIdByElem(document.querySelectorAll(`.${class_header_tab}`)[0]);
    renderHeaderTabs(initHeaderId);
  };
};

const hash = window.location.hash.substring(1);
initPage(hash);
initListeners();

function addCopyButton () {
  const elemsForButton = document.querySelectorAll(".codeblock");

  if (elemsForButton) {
    elemsForButton.forEach((elem) => {
      const copyButton = document.createElement('button');
      copyButton.textContent = 'copy';
      copyButton.classList.add("clickBtn");
      elem.insertAdjacentElement('afterend', copyButton);
    });
  };
};