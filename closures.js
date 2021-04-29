console.log('closures');

/*

A closure is the combination of a function bundled 
together(enclosed)with references to its surrounding 
state (the lexical environment).
In other words, a closure gives you access to an outer 
function's scope from an inner function


Closure is an ability of a function to remember the variables
and functions that are declared in its outerscope

*/

var Person = function(pName){
    var name = pName;
    this.getName = function(){
        return name;
    }
}
var person = new Person('hareesh');
console.log(person.getName());

//let's understand the closures by example

function randomFunction(){
    var obj1 = {
        name: 'hareesh',
        age: 27
    }
    return function(){
        console.log(obj1.name + " is" + " awesome");
    }
}
var initialiseClosure = randomFunction();

initialiseClosure();














