class Calculator {
    
    constructor() {
    }
 
    addition(firstNo, secondNo) {
        return firstNo + secondNo;
    }

    subtraction(firstNo, secondNo) {
        return firstNo - secondNo;
    }

    multiplication(firstNo, secondNo) {
        return firstNo * secondNo;
    }

    division(firstNo, secondNo) {
        return firstNo / secondNo;
    }    
}

// We export the Calculator class so it can
module.exports = Calculator;