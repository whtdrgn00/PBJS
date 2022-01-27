// ####Задача 4

// Создать имплементацию функции`some`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию

const arr = [1,2,3];
console.log(some(arr, function(item, i, arr) {return item > 3})); // false

function some(array, fn) {
    if (!Array.isArray(array)) throw new Error('parameter type should be an array');
    if (typeof (fn) != 'function') throw new Error('parameter type should be an array');

    for (let i = 0; i < array.length; i++) {
        if (fn(array[i], i, array)) return true;
    }

    return false;
};