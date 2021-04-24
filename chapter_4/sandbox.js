// callbacks & foreach

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

people.forEach(function(){
    console.log('something');
});

///////////////////////////////////////////////////////////
console.log("---");

people.forEach(function(person){
    console.log(person);
});

///////////////////////////////////////////////////////////
console.log("---");

people.forEach(person => {
    console.log(person);
});

///////////////////////////////////////////////////////////
console.log("---");

people.forEach((person, index) => {
    console.log(index, person);
});

///////////////////////////////////////////////////////////
console.log("---");

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);

///////////////////////////////////////////////////////////

// Funções de callback são funções normais, que são passadas
// a outras funções como argumento

///////////////////////////////////////////////////////////