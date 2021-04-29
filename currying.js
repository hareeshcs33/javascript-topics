console.log('currying');

/*

Currying is an advanced technique to transform a function 
of arguments n to n functions of one of one or less 
arguments.


*/

//currying example 1

function add(a){
    return function(b){
        return a+b;
    }
}
console.log(add(2)(3), 'currying ecample 1');












