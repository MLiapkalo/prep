/*Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"

Example 2:

Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
 

Constraints:

The given address is a valid IPv4 address.*/

const defangIPaddr = address => {
    const replacer = '[.]';
    let defanged = '';
    for (let char of address) {
        defanged += (char === '.' ? replacer : char)
    }
    return defanged;
};

// JS oneliner
// const defangIPaddr = address => address.split('.').join('[.]');

console.log("255.100.50.0 ->", defangIPaddr("255.100.50.0"));
console.log("1.1.1.1 ->", defangIPaddr("1.1.1.1"));
