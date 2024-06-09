function stringTransf(string) {
    const length = string.length;

    // Check if the length of the string is divisible by 3
    if (length % 3 === 0) {
        string = string.split('').reverse().join('');
    }

    // Check if the length of the string is divisible by 5
    if (length % 5 === 0) {
        string = string.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    // If the length of the string is divisible by both 3 and 5 (should be divisible by 15)
    
    if (length % 15 === 0) {
        // Reverse the entire string
        string = string.split('').reverse().join('');
        // Replace each character with its ASCII code
        string = string.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    return string;
}

console.log(stringTransf("Hamburger")); 
console.log(stringTransf("Pizza"));
console.log(stringTransf("Chocolate Chip Cookie")); 