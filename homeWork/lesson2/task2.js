// ####Задача 2

// Перепишите `if..else` с использованием нескольких операторов`?`.

// Для читаемости — оформляйте код в несколько строк.

// var message;

// if (login == 'Pitter') {
//     message = 'Hi';
// } else if (login == 'Owner') {
//     message = 'Hello';
// } else if (login == '') {
//     message = 'unknown';
// } else {
//     message = '';
// }

var message;

message = login =='Pitter' ? 'hi' : 
          login == 'Owner' ? 'hello' :
          login == '' ? 'unknown' : '';

