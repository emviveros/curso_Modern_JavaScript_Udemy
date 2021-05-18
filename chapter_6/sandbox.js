const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    ul.prepend(li);
});

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', e => {
//         console.log('event in LI');
//         e.stopPropagation(); // interrompe bubbling event
//         e.target.remove();
//     });


ul.addEventListener('click', e => {
    // console.log('event in UL');
    // console.log(e);  //Verifica-se com esta linha que cada li tem tagname = LI
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
});