import globalVars from "../../globalVars.js";

let data_descr = `${globalVars.titleTextTagOpen}
Сгенерировать случайное число в указанном диапазоне
${globalVars.titleTextTagClose}
${globalVars.codeTextTagOpen}getRandomFromTo(1, 10);

function getRandomFromTo(min, max) {
    let range = max - min + 1;
    return Math.floor(Math.random()*range) + min;
};
${globalVars.codeTextTagClose}
${globalVars.textTagOpen}Math.floor — округление числа вниз до ближайшего целого.
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}Math.floor(4.9); // 4
Math.floor(4); // 4
Math.floor(-0.1); // -1
Math.floor('5.9'); // 5
Math.floor(NaN); // NaN
Math.floor(Infinity); // Infinity
${globalVars.codeTextTagClose}
${globalVars.textTagOpen}Math.random — возвращающает псевдослучайное число в диапазоне [0, 1) (включительно 0, эксклюзивно 1).
${globalVars.textTagClose}
${globalVars.codeTextTagOpen}// случайное целое в [0, n-1]
Math.floor(Math.random() * n);

// случайное целое в [min, max] включительно
Math.floor(Math.random() * (max - min + 1)) + min;

// случайное число с плавающей точкой в [min, max)
Math.random() * (max - min) + min;

// случайный элемент массива
arr[Math.floor(Math.random() * arr.length)];

// случайный булев с вероятностью p
Math.random() < p;
${globalVars.codeTextTagClose}
`;

let RandomNum = {
    id: "RandomNum",
    name: "Сгенерировать число",
    sub: "",
    descr: data_descr 
};

export { RandomNum };