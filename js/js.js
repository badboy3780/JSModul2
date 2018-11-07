'use strict'

let userInput;
const numbers = [];
let total = 0;
const INVALID_FORM = 'Было введено не число, попробуйте еще раз'

do{
  userInput = prompt("Вводите числа");

  if (userInput === null){
    break;
  }else if (isNaN(+userInput)){
    alert(INVALID_FORM);
  }else{

    numbers.push(+userInput);

  }

}while (userInput);



if (numbers.length != 0){

    for(let i = 0; i < numbers.length; i++){
      total += numbers[i];
      }

  alert("Общая сумма чисел равна: " + total);
}
