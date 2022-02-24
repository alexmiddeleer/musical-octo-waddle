class Result {
    constructor() {
        this.total = 0;
        this.passed = 0;
    }
}
module.exports = function({tests} = {}) {
    const result = new Result();
    result.total = tests && tests.length || 0;
    return result;
};