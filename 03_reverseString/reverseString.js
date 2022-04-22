const reverseString = function(str) {
    splitNReverseNJoin = str.split('').reverse().join('');
    return splitNReverseNJoin;
};

console.log(reverseString('hello there'));

// Do not edit below this line
module.exports = reverseString;