// ####Задача 7

// Написать код который посчитает сумму всех четных элементов в массиве.


var arr = [1,2,3,4];
var sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        sum += arr[i]; 
    }
}

console.log(sum);

// ** Внимание ** !

// - Не разрашается использовать специальные методы массивов.