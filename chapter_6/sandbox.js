const content = document.querySelector('p');

console.log(content.classList);
content.classList.remove('error');
console.log(content.classList);
content.classList.add('success');
console.log(content.classList);

