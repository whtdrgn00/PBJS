// ####Задача 8

// Напишите функцию`f`.Данная функция принимает один параметр: одноуровневый или многоуровневый массив.
// Возвращает данная функция сумму всех элементов на всех уровнях.

// Обратите внимание что функция должна возвращать число 0, если при проходе всех уровней не было найдено ни одного числа.

// Функция должна содержать проверки:
// - Первый параметр обязателен и может принимать только массив
// - Генерировать ошибку если на каком то уровне было найдено не число и не массив

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(f(arr)); // 12
const arr2 = [[[[[1,2]]]]];
console.log(f(arr2)); // 3
const arr3 = [[[[[1,2]]],2],1];
console.log(f(arr3)); // 6
const arr4 = [[[[[]]]]];
console.log(f(arr4)); // 0
const arr5 = [[[[[],3]]]];
console.log(f(arr5)); // 3

function f(arr) {
    let array = arr;
    
    if (!Array.isArray(array)) throw new Error('parameter type should be an array');

    for (let i = 0; i < array.length; i++) {
        if (!Array.isArray(array[i]) && typeof (array[i]) != 'number') throw new Error('Array items should be an array or a number');
        if (Array.isArray(array[i])) {
            array = array.flat();
            i = -1;
        };
    }

    return array.reduce((sum, item) => sum += item, 0);
}
