// ####Задача 5

// Создать имплементацию функции`reduce`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию
// - Третий параметр обязателен и может принимать только строку или число

            
const arr = [1,2,3];
const acc = '0';
console.log(reduce(arr, function(acc, item, i, arr) {return acc + item}, acc)); //0123

function reduce(array, fn, initial) {
    if (!Array.isArray(array)) throw new Error('parameter type should be an array');
    if (typeof (fn) != 'function') throw new Error('parameter type should be an array');
    if (typeof (initial) != 'number' && typeof (initial) != 'string') throw new Error('parameter type should be an number or string');

    let i = 0,
        prevValue = initial;

    for (i; i < array.length; i++) {
        prevValue = fn(prevValue, array[i], i, array);
    }

    return prevValue;
}