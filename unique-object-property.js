console.log("unique object property");

let products = [
    {
        title: 'Iphone 8',
        company: 'Apple'
    },
    {
        title: 'Gallaxy',
        company: 'Samsung'
    },
    {
        title: 'Iphone xs',
        company: 'Apple'
    },
    {
        title: 'Iphone 7',
        company: 'Apple'
    },
    {
        title: 'MI 7',
        company: 'MI'
    },
];

function getUnique1(arr){
    let tempArr = arr.map(item => item.company);
    return [...new Set(tempArr)];
}
console.log(getUnique1(products));

function getUnique2(arr){
    return arr.reduce((acc,current) => {
        return acc.add(current.company);
    }, new Set())
}
console.log(getUnique2(products));