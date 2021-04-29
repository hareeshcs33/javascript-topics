console.log('call apply bind methods');

//call(), apply(), and bind() methods

//call()

/*

it's a predefined method in javascript
this method invokes a method (function) by specifying the owner object.

*/

//example 1

function sayHello(){
    return "hello " + this.name + ' this is call method example 1';
}
var obj = {
    name: 'hareesh'
}

console.log(sayHello.call(obj));

//example 2
//call method allows an object to use the method (function) of another object.

var person = {
    age: 27,
    getAge: function(){
        return this.age + ' this age value is call example 2';
    }
}
var person2 = {
    age: 28
};

console.log(person.getAge.call(person2));

//example 3
//call() accepts arguments
/*

The call method sets the this inside the function and 
immediately executes that function.

The difference between call() and bind() is that the 
call() sets the this keyword and executes the function 
immediately and it does not create a new copy of the 
function, while the bind() creates a copy of that function 
and sets the this keyword.

*/

function saySomething(message){
    return this.name + ' is ' + message + ' call example 3';
}
var person4 = {
    name: 'hareesh'
}

console.log(saySomething.call(person4, 'awesome!'));

//apply()
/*

The apply method is similar to the call() method. 
The only difference is that,
call() method takes arguments separately whereas, 
apply() method takes arguments as an array.

*/

function saySomething2(message){
    return this.name + ' is ' + message + ' apply example 1';
}
var person5 = {
    name: 'hareesh'
}
console.log(saySomething2.apply(person5, ['awesome!!!']));

//bind()
/*

This method returns a new function, where the value of 'this'
keyword will be bound to the owner object, 
which is provided as a parameter.

*/
var bikeDetails = {
    displayDetails: function(regNumber, brandName){
        return this.name + ',' + ' bike details: ' + regNumber + ', ' + brandName;
    }
}

var person12 = {
    name: 'hareesh'
}
var detailsOfPerson = bikeDetails.displayDetails.bind(person12, 'ka27ec1020', 'honda');

console.log(detailsOfPerson());























