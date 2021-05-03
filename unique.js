console.log("unique value");
function unique(str){
    let result = [];
    for(let letter of str){
        if(result.indexOf(letter) !== -1){
            return false;
        }
        result.push(letter);
    }
    return true;
}
console.log(unique("abcdef"));
console.log(unique("abcdefa"));

function unique1(str){
    for(let i = 0; i < str.length; i++){
        if(str.lastIndexOf(str[i]) !== i){
            return false;
        }
    }
    return true;
}
console.log(unique1("abcdef"));
console.log(unique1("abcdefa"));