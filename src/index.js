class Result {
    constructor() {
        this.total = 0;
        this.passed = 0;
        this.failedTests = [];
    }
    get allPassed() {
        return this.total && this.total === this.passed;
    }
    recordFailure(test) {
        this.failedTests.push(test);
    }
}

const anArray = x => Array.isArray(x) ? x : [];
const aFunction = x => typeof x === 'function' ? x : () => 0;

module.exports = function({tests, testRunner} = {}) {
    const result = new Result();
    tests = anArray(tests);
    testRunner = aFunction(testRunner);
    result.total = tests.length;
    tests.forEach(t => {
        if(!testRunner(t)) {
            result.recordFailure(t);
        }
    });
    result.passed = tests.length - result.failedTests.length;
    return result;
};