const fibonacci = function(num) {
    if (typeof num !== "number"){
        num = parseInt(num);
    }
    if (num < 0){
        return "OOPS";
    }
    if (num === 0) {
        return 0;
    }

    //first and second values r 1, so loop doesnt need to execute
    prev1 = 1;
    prev2 = 1;
    for (let i = 3; i <= num; i++){
        temp = prev1;
        prev1 += prev2;
        prev2 = temp;
    }
    return prev1;
};

// Do not edit below this line
module.exports = fibonacci;
