const countryName = "КитаЙ";

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line
  switch (country) {
  // Write code under this line
      case CHINA:
      price = 100;
      break;
      
      case AUSTRALIA:
      price = 170;
      break;
      
      case INDIA:
      price = 80;
      break;
      
      case JAMAICA:
      price = 120;
      break;
      
      default:message = NO_DELIVERY
  }
}
if (price !==0) { // Write code on this line
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}

console.log(message)

// console.log(message);

//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'

   


// console.log(`Доставка в Чили будет стоить ${250} кредитов`);
// console.log(`Доставка в Австралия  будет стоить ${170} кредитов`);
// console.log(`Доставка в Индия будет стоить ${80} кредитов`);
// console.log(`Доставка в Ямайка будет стоить ${120} кредитов`);


    //  let count = prompt('Желаемое количество дроидов');
    //  if(count === null) { // Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
    //      result = "Отменено пользователем!";
    //  } else if(isNaN(count[0]) || isNaN(count)) { // Если было введено не число
    //      result = "Введите число";
    //  } else { // В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
    //      totalPrice = pricePerDroir * count;
    //  }

    //  if(!result) {
    //      // Проверяет сможет ли пользователь оплатить заказ:
    //      if((credits - totalPrice) <= 0) {  
    //          // если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
    //          console.log("Недостаточно средств на счету!");
    //      } else {
    //          // в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение.
    //          credits = credits - totalPrice;
    //          console.log(`Вы купили ${count} дроида, на счету осталось ${credits}`);
    //      }
    //  } else {
    //      console.log(result);
    //  }
