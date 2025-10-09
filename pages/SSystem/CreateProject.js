import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Настройки проекта
${globalVars.titleTextTagClose}
${globalVars.codeTextTagOpen}
В свойствах проекта необходимо:

Поставить чекбоксы:
✓ Требуется ввод имени пользователя и пароля
✓ Скрыть кнопку назад (вкладка Внешний вид)

Дополнительно указать:
• Анкета (выбрать соответсвующую анкету для проекта)
• Тип "Мобильное приложение" (если сбор данных идет через приложение)
• Состояние "Сбор данных" (можно будет тестировать через приложение)
• Запись координат "Включено"
• Запись звука "Включено"
${globalVars.codeTextTagClose}
`;

let CreateProject = {
    id: "CreateProject",
    name: "Создать проект",
    sub: "",
    descr: data_descr 
};

export { CreateProject };