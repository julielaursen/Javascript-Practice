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

/*prototype object on the function object of Person, attach greetHello method
prototype of any objet created on Person object, so new Persons inherit that prototype
down the prototype chain
*/
Person.prototype.greetHello = function() {
    console.log('Hello,' + this.firstname + ' ' + this.lastname);
};

var jim = new Person('Jim', 'Doe');
    console.log('Hello,' + jim.firstname + " " + jim.lastname);
var julie = new Person('Julie', 'Doe');

console.log(jim.__proto__);
console.log(jane.__proto__);
console.log(jim.__proto__ === jane.__proto__);

jim.greetHello();
julie.greetHello();