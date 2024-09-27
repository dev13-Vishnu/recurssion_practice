function reverseString(str) {
    if(str === "") {
        return ""; //base case empty string
    }
    return reverseString(str.substr(1)) + str.charAt(0); //recursive case;
}

console.log(reverseString("hello"));
console.log(reverseString ("Desserts"));
console.log(reverseString("live"));
console.log(reverseString("raw"))