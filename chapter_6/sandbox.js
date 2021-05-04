const paragrafo = document.querySelector('p');

//console.log(paragrafo.innerText);
// paragrafo.innerText = '! ninjas are awesome!';

const paragrafos = document.querySelectorAll('p');

// paragrafos.forEach(paragrafo => {
//     console.log(paragrafo.innerText);
//     paragrafo.innerText += ' novo texto';
// });


// modificando o conteúdo de uma classe, neste caso content
const content = document.querySelector('.content');

// // console.log(content.innerHTML);
// content.innerHTML += '<h2> ISTO É NOVO </h2>'


const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
});