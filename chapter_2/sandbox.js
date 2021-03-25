// strings
console.log('hello, world');

let email = 'mario@ninja.nintendo';
console.log(email);

//string concatenation
let primeiroNome = 'Brandom';
let sobrenome = 'Sanderson';

let nomeCompleto = primeiroNome + ' ' + sobrenome;
console.log(nomeCompleto);

// getting characters
console.log(nomeCompleto[2]);

// string length
console.log(nomeCompleto.length);

// string methods
console.log(nomeCompleto.toUpperCase());
let result = nomeCompleto.toLowerCase();
console.log(result, nomeCompleto)

let index = email.indexOf('@')
console.log(index);