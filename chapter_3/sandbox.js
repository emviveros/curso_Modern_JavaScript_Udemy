// else is statement

const senha = 'p@ss1234567890'

if(senha.length >= 12){
    console.log('Essa senha é muito forte!')
} else if(senha.length >= 8){
    console.log("Essa senha é longa o suficiente!");
} else{
    console.log('A senha não é longa suficiente');
}