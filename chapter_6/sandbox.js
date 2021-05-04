const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'http://www.estebanviveros.com');
link.innerText = 'Site do Esteban';

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');

mssg.setAttribute('style', 'color: green');