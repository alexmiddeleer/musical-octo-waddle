module.exports = class Result {
    constructor() {
        this.failedTests = [];
        this.passedTests = [];
    }
    get allPassed() {
        return this.failedTests.length == 0;
    }
    get passed() {
        return this.passedTests.length;
    }
    get total() {
        return this.passedTests.length + this.failedTests.length;
    }
    recordFail(test) {
        this.failedTests.push(test);
    }
    recordPass(test) {
        this.passedTests.push(test);
    }
    recordResult(passed, test) {
        if(passed) this.recordPass(test);
        else this.recordFail(test);
    }
};