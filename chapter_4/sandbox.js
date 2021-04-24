// object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@email.com',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite']
};

console.log(user);
console.log(user.name);

// user.age = 43;
console.log(user.age);

console.log(user['name']);
console.log(user['email']);

user['name'] = 'chun-li';
console.log(user['name']);

const key = 'location';
console.log(user[key]);


console.log(typeof user);