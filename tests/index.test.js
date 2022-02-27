const testFn = require('../src/index');

const allTestsPassTestRunner = () => true;
const minimalTest = {};

const expectResultToHave = (result, {total, passed, allPassed}) => {
    expect(typeof result).toBe('object');
    expect(result.total).toBe(total);
    expect(result.passed).toBe(passed);
    expect(!!result.allPassed).toBe(!!allPassed);
    expect(Array.isArray(result.failedTests)).toBeTruthy();
    expect(result.failedTests.length).toBe(total-passed);
};

test('calling test returns a report', () => {
    const result = testFn();
    expectResultToHave(result, { total: 0, passed: 0, allPassed: false });
});

test('calling test with a single test', () => {
    const result = testFn({
        tests: [minimalTest]
    });
    expectResultToHave(result, { total: 1, passed: 0, allPassed: false });
    expect(result.failedTests[0]).toBe(minimalTest);
});

test('calling test with a single passing test', () => {
    const result = testFn({
        tests: [minimalTest],
        testRunner: allTestsPassTestRunner
    });
    expectResultToHave(result, { total: 1, passed: 1, allPassed: true });
});