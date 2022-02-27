const testFn = require('../src/print-report');
const Result = require('../src/result');

const minimalResult = new Result();

test('it prints a minimal report', () => {
    const result = testFn(minimalResult);
    expect(typeof result).toEqual('string');
    expect(result).toEqual('PASS');
});

test('failing tests result in FAIL', () => {
    const failResult = new Result();
    failResult.recordFail({});
    const result = testFn(failResult);
    expect(result).toEqual('FAIL');
});