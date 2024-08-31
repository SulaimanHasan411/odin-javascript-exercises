const findTheOldest = function(arr) {
    return arr.reduce(function (oldestSoFar, currentPerson){
        let oldestAge;
        if ("yearOfDeath" in oldestSoFar) {
            oldestAge = oldestSoFar.yearOfDeath - oldestSoFar.yearOfBirth;
        }
        else {
            oldestAge = (new Date).getFullYear() - oldestSoFar.yearOfBirth;
        }

        let currentAge;
        if ("yearOfDeath" in currentPerson) {
            currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        }
        else {
            currentAge = (new Date).getFullYear() - currentPerson.yearOfBirth;
        }
        if (oldestAge > currentAge){
            return oldestSoFar;
        }
        else {
            return currentPerson;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
