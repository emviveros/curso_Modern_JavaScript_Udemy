// returning values

// const speak = function(name = 'luigi', time = 'night'){
//     console.log(`good ${time} ${name}!`);
// };

// const calcArea = function(radius){
//     let area = 3.14 * radius**2;
//     console.log(area);
// };

// calcArea(5);


const calcArea = function(radius){
    let area = 3.14 * radius**2;
    return area;
};

const area = calcArea(5);
console.log(area);

const calcVol = function(area){
    // calculo do volume em função da área
};

// podemos obter o volume usando:
calcVol(area);