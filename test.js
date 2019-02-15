let chai = require('chai');
chai.should();
let Calculator = require('./calculator');

// Calculator suite
describe('Calculator suite', () => {
    it('returns the addition', () => {
        let calcObject = new Calculator();
        calcObject.addition(20, 30).should.equal(50);
    });

    it('returns the subtraction', () => {
        let calcObject = new Calculator();
        calcObject.subtraction(20, 5).should.equal(20);
    });
    
}) ;
