// ####Задача 6

// Создать имплементацию функции`reduceRight`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию
// - Третий параметр обязателен и может принимать только строку или число


const arr = [1,2,3];
const acc = '0';
console.log(reduceRight(arr, function (acc, item, i, arr) { return acc + item}, acc)); //0321

function reduceRight(array, fn, initial) {
    if (!Array.isArray(array)) throw new Error('parameter type should be an array');
    if (typeof (fn) != 'function') throw new Error('parameter type should be an array');
    if (typeof (initial) != 'number' && typeof (initial) != 'string') throw new Error('parameter type should be a number or string');

    let i = array.length - 1,
        prevValue = initial;

    for (i; i >= 0; i--) {
        prevValue = fn(prevValue, array[i], i, array);
    }

    return prevValue;
}