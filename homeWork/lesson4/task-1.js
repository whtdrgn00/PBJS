// ####Задача 1

// Создать имплементацию функции`forEach`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию


const arr = [1,2,3];
forEach(arr, function(item, i, arr) {console.log(item, i, arr)});

function forEach(array, fn) {
    if (!Array.isArray(array)) throw new Error('parameter type should be an array');
    if (typeof(fn) != 'function') throw new Error('parameter type should be an array');
    
    for (let i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
};





