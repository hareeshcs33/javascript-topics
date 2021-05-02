console.log("coding challenges");

console.log('//finding longest word in the string');
function longestWord(str){
    let words = str.split(" ");
    let longWord = "";
    for(word of words){
        if(word.length > longestWord.length){
            longWord = word;
        }
    }
    return longWord;
}
console.log(longestWord("this is the longest string"));

console.log('//finding longest words in the string');
function longestWords(str){
    let words = str.split(" ");
    let longWords = [""];
    let size = 0;
    for(let i = 0; i < words.length; i++){
        if(words[i].length >= size){
            size = words[i].length;
            if(longWords[longWords.length - 1].length < words[i].length){
                longWords = [];
                longWords.push(words[i]);
            }else{
                longWords = [...longWords, words[i]];
            }
        }
    }
    
    return longWords;
}
console.log(longestWords("this is the longest words in the strings"));
