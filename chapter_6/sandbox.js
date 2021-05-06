// content.classlist.add('error');
// content.classlist.remove('error');

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

paragrafos.forEach( p => {
    // console.log(p.textContent); // o método textContent exibe o conteúdo de todos os parágrafos, mesmo que tenham sido ocultados
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }
    if(p.textContent.includes('success')){
        p.classList.add('success');
    }
});

const title = document.querySelector('.title');

title.classList.toggle('test');
title.classList.toggle('test');

// 3 métodos para adicionar são add, remove e toogle