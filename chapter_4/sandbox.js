// object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@email.com',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    //outra forma de escrever regular functions:
    logBlogs(){
        console.log(this);
        // console.log(this.blogs);
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    },
    logThis: () => {
        console.log(this);
    }
};

user.logBlogs();
console.log(this);

// quando usamos arrow function em JavaScript, o parâmetro this
// funciona de forma diferente quando usamos regular fuctions...
// repare que em regular functions aponta para o objeto e em 
// arrow functions aponta para o documento principal.
user.logThis();