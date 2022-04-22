const sumAll = function(firstN, secondN) {
    sum = 0;
    if (typeof firstN !== 'number' || typeof secondN !== 'number' || firstN < 0 || secondN < 0){
        return 'ERROR';
    } else if (secondN < firstN){
        for (let i = secondN; i <= firstN; i++){
            sum += i;
        } return sum;
    } else {
        for (let j = firstN; j <= secondN; j++){
            sum += j;
        } return sum;
    } 
};


// Do not edit below this line
module.exports = sumAll;
