const sumAll = 
function getSum(a, b) {
    
    let finalSum = 0; 

    if (Math.abs(Math.floor(a)) !== a || Math.abs(Math.floor(b)) !== b) {
        return "ERROR"; 
    }

    if (a > b) {
        let tempNum = a;
        a = b;
        b = tempNum; 
    }

    for (let i = a; i < b + 1; i++) {
        finalSum += i;
    } 

    return finalSum; 
};

// Do not edit below this line
module.exports = sumAll;
