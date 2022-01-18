// #### Задача 10

// Отсортировать массив по возрастанию.

var arr = [6, 5, 4, 3, 2, 1];

for (var i = 0, endIndex = arr.length - 1; i < endIndex; i++) {
    for (var j = 0, endIndexJ = endIndex - i; j < endIndexJ; j++) {
        if (arr[j] > arr[j + 1]) {
            var swap = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = swap;
        }
    }
}

console.log(arr);

// [1, 2, 3, 4, 5, 6]

// ** Внимание ** !

// - Не разрашается использовать специальные методы массивов