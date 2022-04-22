const repeatString = function(str, n) {
    result = ''
    if (n < 0) return 'ERROR'
    for(let counter  = 0; counter < n; counter++){
        result += str;
    } return result; 
}

console.log(repeatString('hey', 10));
console.log(repeatString('hey', 1));
console.log(repeatString('hey', 0));
console.log(repeatString('hey', -1));

// Do not edit below this line
module.exports = repeatString;
