const repeatString = 
function repeatStr(str, num) {
    if (num < 0) {
        return "ERROR";
    }
    else {
        let repeatedStr = "";
        for (let i = 0; i < num; i++) {
            repeatedStr += str;
        }
        return repeatedStr;
    }
};

// Do not edit below this line
module.exports = repeatString;
