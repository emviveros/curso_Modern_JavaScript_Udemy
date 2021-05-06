const title = document.querySelector('h1');

// title.setAttribute('style', 'margin: 50px;'); //deste modo o estilo é substituido, não é o que desejamos

// adicionando atributos ao style
console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';    //adicionando style
title.style.color = 'crimson';
title.style.fontSize = '60px';
title.style.margin = ''         // removendo style