const Result = require('./result.js');

const anArray = x => Array.isArray(x) ? x : [];
const aFunction = x => typeof x === 'function' ? x : () => 0;

module.exports = function({tests, testRunner} = {}) {
    const result = new Result();
    tests = anArray(tests);
    testRunner = aFunction(testRunner);
    tests.forEach(t => {
        if(testRunner(t)) {
            return result.recordPass(t);
        }
        result.recordFail(t);
    });
    return result;
};