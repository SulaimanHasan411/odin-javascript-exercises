const removeFromArray = function(array,...removeThese) {
    
    const newArray = [];

    array.forEach(element => {
        if(!removeThese.includes(element)){
            newArray.push(element);
        }
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
