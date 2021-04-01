// variables & block
let age = 30;

// let age = 50;

if(true){
    let age = 40;
    // age = 40;
    let name = 'shaun'
    console.log('inside 1st code block: ', age, name);

    if(true){
        let age = 55;
        console.log('inside 2nd code block: ', age, name);
    }
}

console.log('outside code block: ', age, name);

// o mesmo vale para const