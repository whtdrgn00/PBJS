// ####Задача 7

// Сделайте функцию`getDivisors`, которая параметром принимает число и возвращает массив его делителей
// (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
// Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число больше 0.


console.log(getDivisors(26)); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0

function getDivisors(num) {
    
    if (typeof num == 'number') {
        let resultArray = [];

        if (!(num > 0)) throw new Error('parameter can\'t be a 0');


        for (i = 1; i <= num; i++) {
            if (num % i) continue; 
            resultArray.push(i);
        }

        return resultArray;     
    } else {
        throw new Error('parameter type is not a Number')
    };
}

