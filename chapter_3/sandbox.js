// logical operators - OR || and AND &&

// const senha = 'p@ss'
// const senha = 'p@ss12334567890'
// const sesnha = 'pass12334567890'
const senha = 'p@ss12'

if(senha.length >= 12 && senha.includes('@')){
    console.log('Essa senha é muito forte!')
} else if(senha.length >= 8 || senha.includes('@') && senha.length > 5){
    console.log("Essa senha é forte o suficiente");
} else{
    console.log('A senha não é forte suficiente');
}