import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Добавление вложений.
${globalVars.titleTextTagClose}
${globalVars.textSubTagOpen}
К вопросу можно прикреплять фотографии или документы. Ссылки на файлы будут находиться в массиве после ответа на вопрос.
${globalVars.textSubTagClose}
${globalVars.textTagOpen}
Включение данной опции в настройках вопроса:
Вопрос -> Дополнительно -> Разрешить добавление вложений.

Если последующие поля не заполнены – нужно будет прикрепить 1 файл.

Минимум вложений:
Минимальное допустимое количество прикреплённых файлов. Если заполнить только это поле – нужно будет прикрепить строго указанное количество.

Максимум вложений:
Максимально допустимое количество прикреплённых файлов. Если заполнить только это поле – можно будет прикрепить от 0 до указанного количества.

Выбор допустимого типа файла:
Изображение - файл в формате .jpg, .jpeg, .png, .heic.
Документ - файл в формате .doc, .docx, .odt, .rtf, .txt, .xls, .xlsx, .ods, .csv, .ppt, .pptx, .odp, .pdf, .djvu, .html.
Аудио (только в веб-версии) - файл в формате .mp3, .m4a, .wma, .wav.
Любой поддерживаемый - можно прикрепить как изображение, так и документ.
${globalVars.textTagClose}
${globalVars.textTagOpen}
Или разрешить добавление вложений можно через скрипт перед показом:
${globalVars.textTagClose}
${globalVars.codeTagOpen}
Q.allowedAttachmentsType = AttachmentTypeIds.Image;
Q.minAttachmentsCount = 1;
Q.maxAttachmentsCount = 10;
${globalVars.codeTagClose}
`;

let Attachments = {
    id: "Attachments",
    name: "Вложения",
    sub: "",
    descr: data_descr 
};

export { Attachments };