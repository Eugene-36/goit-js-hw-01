        let credits = 23580;
        let pricePerDroir = 3000;
        let totalPrice;
        let result;
 
        let count = prompt('Желаемое количество дроидов');
        if(count === null) { // Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
            result = "Отменено пользователем!";
        } else if(isNaN(count[0]) || isNaN(count)) { // Если было введено не число
            result = "Введите число";
        } else { // В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
            totalPrice = pricePerDroir * count;
        }
 
        if(!result) {
            // Проверяет сможет ли пользователь оплатить заказ:
            if((credits - totalPrice) <= 0) {  
                // если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
                console.log("Недостаточно средств на счету!");
            } else {
                // в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение.
                credits = credits - totalPrice;
                console.log(`Вы купили ${count} дроида, на счету осталось ${credits}`);
            }
        } else {
            console.log(result);
        }



