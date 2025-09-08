// Write a JavaScript program to capitalize the first letter of each word of a given string.
function capitalizeFirstLetter(str) {
    let words = str.split(" ");
    let result = "";
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 0) {
            result += word.charAt(0).toUpperCase() + word.slice(1);
        }
        if (i < words.length - 1) {
            result += " ";
        }
    }
    return result;
}

words = "the quick brown fox";
test = capitalizeFirstLetter(words);
console.log(test);