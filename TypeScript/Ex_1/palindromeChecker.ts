function checkPalindrome(word: string): boolean {
    const reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
}

const word = "racecar";
if (checkPalindrome(word)) {
    console.log(`${word} is a palindrome.`);
} else {
    console.log(`${word} is not a palindrome.`);
}
