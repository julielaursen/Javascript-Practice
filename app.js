//node require and module exports example
var hithere = require('./greet');
hithere();

//javacsript Object literal example
var person = {
    firstname: 'John',
    lastname: 'Doe',
    greet: function() {
        console.log('Hello, ' + this.firstname + ' ' + this.lastname);

    }
}
person.greet();

//Create a function constructor example
function Person(firstname, lastname) {
    //create an empty object (this) and create properties on them
    this.firstname = firstname;
    this.lastname = lastname;
}
//create a new Person object called jane
var jane = new Person('Jane', 'Doe');
console.log('Hello ' + jane.firstname);

//prototype example
Person.prototype.greetHello = function() {
    console.log('Hello,' + this.firstname + ' ' + this.lastname);
};

var jim = new Person('Jim', 'Doe');
    console.log('Hello,' + jim.firstname + " " + jim.lastname);
var julie = new Person('Julie', 'Doe');

jim.greetHello();
julie.greetHello();