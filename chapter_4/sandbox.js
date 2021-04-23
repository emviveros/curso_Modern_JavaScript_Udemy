// regular function
// const calcArea = function(radius){
//      return 3.14 * radius**2;
// };

// arrow function

// // se tiver apenas um parâmetro não precisa dos parênteses em (radius)
// const calcArea = (radius) => {
//      return 3.14 * radius**2;
// };

// outra forma de escrever arrow function (se tiver um return simples de uma linha):
const calcArea = radius => 3.14 * radius**2;



const area = calcArea(5);
console.log('area is: ', area);

// fazendo arrow function de funções usadas anteriormente:
const greet = () => 'hello world!';

console.log(greet());

// outra função do tutorial Udemy

// const bill = function(products, tax){
//      let total = 0;
//      for(let i=0; i < products.length; i++){
//           total += products[i] + products[i] * tax;
//      }
//      return total;
// }

const bill = (products, tax) => {
     let total = 0;
     for(let i=0; i < products.length; i++){
          total += products[i] + products[i] * tax;
     }
     return total;
}

console.log(bill([10,15,30], 0.2));
