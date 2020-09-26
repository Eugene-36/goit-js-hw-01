const userPassword = 'jqueryismyjam';

const ADMIN_PASSWORD = 'jqueryismyjam';

const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
let message ;

// Write code under this line
  

// console.log(message);
const name = prompt('Введите пароль')

const name = prompt('Введите пароль');
if(userPassword === jqueryismyjam){
      console.log(ACCESS_IS_ALLOWED);
      message = ACCESS_IS_ALLOWED
}
 else if(userPassword === null){
console.log(CANCELED_BY_USER)
message = CANCELED_BY_USER
}
else if(userPassword !== '123'){
 console.log(ACCESS_DENIED)
 message = ACCESS_DENIED
}
// if (ADMIN_PASSWORD === userPassword) {
//       message = ACCESS_IS_ALLOWED;
//     } else if (userPassword === null) {
//       message = CANCELED_BY_USER;
//     } else if (ADMIN_PASSWORD !== userPassword) {
//       message = ACCESS_DENIED;
//     }
// console.log(message);
// alert(message);



//если userPassword равно 'jqueryismyjam' 
// то значение message будет равно
// 'Добро пожаловать!'

//если userPassword равно  null 
// то значение message будет равно  
// 'Отменено пользователем!'

//если userPassword равно '123' 
// то значение message будет равно
// 'Доступ запрещен, неверный пароль!'











// const noPass = 'Доступ запрещен, неверный пароль!';
// const cancel = 'Отменено пользователем!';
// const welcome = 'Добро пожаловать!';
// const  ADMIN_PASSWORD = 'jqueryismyjam';
// const log = ('Введите пароль');

// if (  ADMIN_PASSWORD === null || log == '' ){
//     alert(cancel);
//    }
//         else {
//          const pass = prompt('Введите пароль');
//          if ( pass === null || pass == '' ){
//                console.log('message:', 'Отменено пользователем!' )

//          }
//          else if ( pass !=  ADMIN_PASSWORD ) {
//                console.log('message:', 'Доступ запрещен, неверный пароль!')
//               }
//               else {
//                   console.log('message:', 'Добро пожаловать!');
//               }
//         }

