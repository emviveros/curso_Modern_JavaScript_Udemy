const article = document.querySelector('article');

// console.log(article.children);
// // Não da pra usar forEach em uma HTML colletion, apenas em arrays então
// // vamos pegar a HTML Collection e transformar em um array com o método from
// console.log(Array.from(article.children)); // agora dá pra usar fromEach

// //Adiciona classe = article-element em cada tag em article.children
// Array.from(article.children).forEach(child => {
//     child.classList.add('article-element');
// });

const title = document.querySelector('h2');

console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);


//chaining
console.log(title.nextElementSibling.parentElement.children);