// get a reference to the 'ul'
const ul = document.querySelector('.people');   // tem a ver com a mágica final

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person => {
    // create html template
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;    // no momento é mágica!