// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

/*Example 1:
Input: "Hello"
Output: "hello"

Example 2:
Input: "here"
Output: "here"

Example 3:
Input: "LOVELY"
Output: "lovely"*/

const toLowerCase = str => {
    let lowercased = '';
    for(let i = 0; i < str.length; i++) {
        let charcode = str.charCodeAt(i);
        lowercased += charcode > 64 && charcode < 97 ? String.fromCharCode(charcode + 32) : str[i]
    }
    return lowercased;
};

console.log(toLowerCase('LOVELY'));
console.log(toLowerCase('Hello'));
console.log(toLowerCase('here'));
