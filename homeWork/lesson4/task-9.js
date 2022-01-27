// ####Задача 9

// Сделайте функцию`arrayFill`, которая будет заполнять массив заданными значениями.Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только число, строку, объект, массив
// - Второй параметр обязателен и может принимать только число

console.log(arrayFill('x',5)); // [x,x,x,x,x]

function arrayFill(item, length) {
    if (typeof (item) != 'number' &&
        typeof (item) != 'string' &&
        typeof (item) != 'object' &&
        !Array.isArray(item)) throw new Error('First argument must be a String, Number, Object or Array');

    if (typeof (length) != 'number') throw new Error('Second argument must be a Number');

    let resultArr = [];

    for (let i = 0; i < length; i++) {
        resultArr.push(item);
    }

    return resultArr;
}