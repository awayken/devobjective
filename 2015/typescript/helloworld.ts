function greeter( person: string ) {
    return 'Hello, ' + person;
}

function add6( input: number ): number {
    return input + 6;
}

var user = 'John User';

var greeting = greeter( user );
var age = add6( 30 );

document.body.innerHTML = greeting + '. You will be ' + age + ' in six years.';
