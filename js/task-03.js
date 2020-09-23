const noLog = 'Доступ запрещен, неверный логин!';
const noPass = 'Доступ запрещен, неверный пароль!';
const cancel = 'Отменено пользователем!';
const welcome = 'Добро пожаловать!';
const login = 'adminLogin';
const password = 'adminPassword';
const log = prompt('ВВедите логин');

if ( log === null || log == '' ){
    alert(cancel);
   }
   else if ( log != login ) {
         alert(noLog);
        }
        else {
         const pass = prompt('ВВедите пароль');
         if ( pass === null || pass == '' ){
         alert(cancel);
         }
         else if ( pass != password ) {
              alert(noPass);
              }
              else {
              alert(welcome);
              }
        }

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let  message;

// let userIput = prompt('Введите то что надо')
// console.log('message:', 'Отменено пользователем!')



// let userIputRight = prompt('Введите то что надо')
// console.log('message:', 'Добро пожаловать!')

/*
 * Спрашиваем имя отеля в котором хотел бы остановится клиент
 * и сохраняем в переменную результат вызова prompt
 */
// const hotelName = prompt('Please enter desired hotel name:');
// console.log(hotelName);







// const total = 100;
// const ordered = 50;

// if(ordered <= total) {
// console.log("Заказ оформлен, с вами свяжется менеджер")
// } else {
//   console.log('На складе недостаточно твоаров!')
// }