const noPass = 'Доступ запрещен, неверный пароль!';
const cancel = 'Отменено пользователем!';
const welcome = 'Добро пожаловать!';
const  ADMIN_PASSWORD = 'jqueryismyjam';
const log = ('Введите пароль');

if (  ADMIN_PASSWORD === null || log == '' ){
    alert(cancel);
   }
        else {
         const pass = prompt('Введите пароль');
         if ( pass === null || pass == '' ){
               console.log('message:', 'Отменено пользователем!' )

         }
         else if ( pass !=  ADMIN_PASSWORD ) {
               console.log('message:', 'Доступ запрещен, неверный пароль!')
              }
              else {
                  console.log('message:', 'Добро пожаловать!');
              }
        }

