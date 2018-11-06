let userInput;
const numbers = [];
let total = 0;

let value;

do{
  value = +prompt("Вводите числа");

  console.log(value);
  if (isNaN(value)){
    alert('Было введено не число, попробуйте еще раз');
  }

  if(!isNaN(value)){

    numbers.push(value);

  }


}while (value);

console.log(numbers);


  for(let i = 0; i < numbers.length; i++){
    total += numbers[i];
    }


if (numbers.length != 0){
  alert("Общая сумма чисел равна: " + total);
}
