// ####Задача 10

// Создать имплементацию функции`reverse`, которая принимает массив в качестве параметра, 
// а возвращает массив только в обратном порядке.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Генерировать ошибку если был передан пустой массив

const arr = [3,2,1];
console.log(reverse(arr)); // [1,2,3]
console.log(arr); // МЕНЯЕТ САМ МАССИВ ПО АНАЛОГИИ С МЕТОДОМ ВСТРОЕНЫМ.

function reverse(arr) {
    if (!Array.isArray(arr)) throw new Error('parameter type should be an array');
    if (arr.length == 0) throw Error('array length can\'t be 0');

    let newArr = [];

    for(let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr.pop());
    }

    for(let i = 0; i < newArr.length; i++) {
        arr.push(newArr.shift());
        i--;
    }

    return arr;
}
