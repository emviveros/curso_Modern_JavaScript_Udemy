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
// });


// Agora depois de comentar código de adição de evento acima,
// associamos o target ao <ul>, (parent) das tags <li>, assim
// não importa se eu adicionei ou já estava presente, todas as <li>
// receberão um target e podem executar eventos associados a elas.
ul.addEventListener('click', e => {
    // console.log('event in UL');
    console.log(e.target);
});