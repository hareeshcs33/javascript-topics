console.log("capitalize-words")

function capitalizedWords(str) {
    let words = str.split(" ").map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return words.join(" ");
}
console.log(capitalizedWords("this is a capitalized string"));