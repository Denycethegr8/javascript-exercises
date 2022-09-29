const findTheOldest = function(people) {
    const arr = [];
    const currentYear = new Date();
    for(let i=0; i<people.length; i++){
        if(!people[i].yearOfDeath) people[i].yearOfDeath = currentYear.getFullYear();
        arr.push(people[i].yearOfDeath - people[i].yearOfBirth);
        } const i = arr.indexOf(Math.max(...arr))
    return people[i];
};

// Do not edit below this line
module.exports = findTheOldest;
