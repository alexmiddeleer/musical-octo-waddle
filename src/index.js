const Result = require('./result');
const printReport = require('./print-report');
const { ensureArray, ensureFn } = require('./ensure');

function makeResult({tests, testRunner} = {}) {
    const result = new Result();
    tests = ensureArray(tests);
    testRunner = ensureFn(testRunner);
    tests.forEach(t => {
        if(testRunner(t)) {
            return result.recordPass(t);
        }
        result.recordFail(t);
    });
    return result;
}

module.exports = function run({tests, testRunner, consoleWriter} = {}) {
    const result = makeResult({tests, testRunner});

    ensureFn(consoleWriter)(printReport(result));

    return result;
};