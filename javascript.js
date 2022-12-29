let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

function palindrome(str) {
    let regexp = /[\W_]/g;
    let lowStr = str.replace(regexp, '').toLowerCase();
    let revStr = lowStr.split('').reverse().join('');
    if (revStr === lowStr);
    return true
};
console.log(palindrome('A man, a plan, a canal. Panama.'))


function convertToRoman(num) {
    let conv = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        },
        roman = "",
        i;
    for (i in conv) {
        while (num >= conv[i]) {
            roman += i;
            num -= conv[i];
        }
    }
    return roman
}

console.log(convertToRoman(83));

function rot13(str) {
    const shift = 13;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let plainAlphabet = alphabet.split('');
    let cipherAlphabet = plainAlphabet
        .map((_symbol, index) => {
            let newIndex = (index + shift) %
                plainAlphabet.length;
            return plainAlphabet[newIndex];
        });
    let decipher = str.toLowerCase().split('')
        .map((symbol) => {
            const index = cipherAlphabet.indexOf(symbol);
            return plainAlphabet[index];
        })
        .join('')
        .toUpperCase();
    return decipher;
};

console.log(rot13("SERR PBQR PNZC"));