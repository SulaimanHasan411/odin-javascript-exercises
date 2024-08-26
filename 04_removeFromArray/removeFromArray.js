const removeFromArray = function(array,...removeThese) {
    
    function getRidOf(arr,thingToRemove){
        return arr.filter((element) => (element !== thingToRemove));
    }

    for (removeElement of removeThese){
        array = getRidOf(array,removeElement);
    }

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
