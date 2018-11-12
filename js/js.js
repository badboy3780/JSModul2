"use strict";

let userInput;
const numbers = [];
let total = 0;
const NONE_NUMBER_MSG = "Было введено не число, попробуйте еще раз";

do {
  userInput = prompt("Вводите числа");

  if (!Number.isNaN(+userInput)) {
      numbers.push(+userInput);
  } else {
    alert(NONE_NUMBER_MSG);
  }
} while (userInput !== null);

if (numbers.length !== 0) {
  for (let i of numbers) {
    total += i;
  }
  if(total !== 0){
    alert("Общая сумма чисел равна: " + total);
  }

}
