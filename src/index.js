class Result {
    constructor() {
        this.total = 0;
        this.passed = 0;
    }
    get allPassed() {
        return this.total && this.total === this.passed;
    }
}

const anArray = x => Array.isArray(x) ? x : [];
const aFunction = x => typeof x === 'function' ? x : () => 0;

module.exports = function({tests, testRunner} = {}) {
    const result = new Result();
    tests = anArray(tests);
    testRunner = aFunction(testRunner);
    result.total = tests.length;
    result.passed = tests.reduce((total, t) => {
        return total + testRunner(t) ? 1 : 0;
    }, 0);
    return result;
};