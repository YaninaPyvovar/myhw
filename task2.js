//2. Обменять значения двух переменных, используя третью (буферную) переменную. Вывести значение переменных до и после обмена.    
//a: 5
//b: 7

//a: 7
//b: 5

var a = 5;
var b = 7;
var c;
console.log('a: ' + a, 'b: ' + b);

//1. оголошуємо змінні а, б, с
//2. у змінну с записуємо значення а
//3. записуємо у змінну а значення змінної б
//4. записуємо у змінну б значення змінної с


console.log('#############');

c = a;
a = b;
b = c;

console.log('a: ' + a, 'b: ' + b);