class Result {
    constructor() {
        this.total = 0;
        this.passed = 0;
        this.failedTests = [];
        this.passedTests = [];
    }
    get allPassed() {
        return this.total && this.total === this.passed;
    }
    recordFail(test) {
        this.failedTests.push(test);
    }
    recordPass(test) {
        this.passedTests.push(test);
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
        if(testRunner(t)) {
            return result.recordPass(t);
        }
        result.recordFail(t);
    });
    result.passed = tests.length - result.failedTests.length;
    return result;
};