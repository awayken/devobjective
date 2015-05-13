function greeter(person) {
    return 'Hello, ' + person;
}

var user = 'John User';

var greeting = greeter( user );

document.body.innerHTML = greeting;
