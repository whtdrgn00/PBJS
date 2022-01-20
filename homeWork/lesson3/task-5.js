// ####Задача 5

// Дан массив с числами`[1, 2, -4, 3, -9, -1, 7]`.Создайте из него новый массив, 
// где останутся лежать только положительные числа`[1, 2, 3, 7]`.
// Создайте для этого вспомогательную функцию`isPositive(-3)`, которая параметром будет принимать число и возвращать true, 
// если число положительное, и false — если отрицательное.
// Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.

// * Для добавление нового элемента в конец массива используйте метод push *

let arr = [1, 2, -4, 3, -9, -1, 7];

function isPositive(n) {
    if (typeof n == 'number') {
        return n > 0 ? true : false;
    }
    throw new Error('parameter type is not a Number');
}

function clearNegativeElements(arr) {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {

        if (isPositive(arr[i])) {
            newArray.push(arr[i]);
        }
    }

    return newArray;
}

let resultArr = clearNegativeElements(arr);

console.log(resultArr); // (4)[1, 2, 3, 7]

