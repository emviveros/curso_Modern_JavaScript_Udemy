// get an element by ID
const title = document.getElementById('page-title');
console.log(title);

// get elements by their class name
const errors = document.getElementsByClassName('error');
console.log(errors);

console.log(errors[0]);
console.log(errors[1]);

// // não podemos usar forEach() em coleções html.
// // Observe que o código abaixo retornará um erro:
// errors.forEach(error => {
//     console.log(error);
// })

console.log(' ');
console.log('-------------------------------');
console.log(' ');

// get elements by their tag name

const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[0]);
console.log(paras[1]);