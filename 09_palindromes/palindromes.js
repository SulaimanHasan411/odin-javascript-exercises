const palindromes = function (str) {
    alphaNumeric = "abcdefghijklmnopqrstuvwxyz0123456789";

    const newStr = str
     .toLowerCase()
     .split("")
     .filter((char) => alphaNumeric.includes(char))
     .join("");

    rev = newStr.split("").reverse().join("");

    return rev === newStr;


};

// Do not edit below this line
module.exports = palindromes;
