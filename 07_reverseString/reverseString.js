const reverseString = function reverseStr(str) {
    let strArray = str.split(''); 
    strArray.reverse();
    return strArray.join(''); 
};

// Do not edit below this line
module.exports = reverseString;
