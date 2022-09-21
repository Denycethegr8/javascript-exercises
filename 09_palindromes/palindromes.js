const palindromes = function (str) {
    const newStr = str.toLowerCase().replace(/[^a-z]/gi, '').replace(/\s/g, '');
    const reversedStr = newStr.split('').reverse().join('');
    return newStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
