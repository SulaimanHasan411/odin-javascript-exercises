const leapYears = function(year) {
    let isDivisibleByFour = year % 4 === 0;
    let isNotCentury = year % 100 !== 0;
    let isDivisibleBy400 = year % 400 === 0;
    if (isDivisibleByFour && isNotCentury || isDivisibleBy400){
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
