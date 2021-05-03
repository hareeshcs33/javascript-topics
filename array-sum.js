console.log("array sum");

function ArraySum(arr){
    let maxVal = Math.max(...arr);
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    if(total === (maxVal * 2)){
        return true;
    }
    return false;
}
console.log(ArraySum([1,2,3,6]));
console.log(ArraySum([1,2,3,6,7]));

function ArrSum(arr){
    let tempArr = arr.sort((a,b) => a-b);
    let maxVal = tempArr.pop();
    let number = 0;
    tempArr.forEach(item => number += item);
    return number === maxVal;
}
console.log(ArrSum([1,2,3,6]));
console.log(ArrSum([1,2,3,6,7]));

