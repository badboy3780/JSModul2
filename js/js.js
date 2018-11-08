'use strict'

let userInput;
const numbers = [];
let total = 0;
const INVALID_FORM = 'Было введено не число, попробуйте еще раз'

do{
  userInput = prompt("Вводите числа");

  if (isNaN(+userInput)){
    alert(INVALID_FORM);
  }else{

    numbers.push(+userInput);

  }

}while (userInput !== null);



if (numbers.length != 0){

  
    for (let i of numbers){
        total += i;
    }


  alert("Общая сумма чисел равна: " + total);
}
