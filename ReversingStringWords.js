function reverseString(string) {
    return string.split(' ').reverse().join(' ');
}

console.log( reverseString('Hello world'));           
console.log( reverseString('Reverse words in string'));