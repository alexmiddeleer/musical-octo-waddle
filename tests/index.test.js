const testFn = require('../src/index');

const allTestsPassTestRunner = () => true;
const minimalTest = {};

const expectResultToHave = (result, {total, passed, allPassed}) => {
    expect(typeof result).toBe('object');
    expect(result.total).toBe(total);
    expect(result.passed).toBe(passed);
    expect(!!result.allPassed).toBe(!!allPassed);
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
});

test('calling test with a single passing test', () => {
    const result = testFn({
        tests: [minimalTest],
        testRunner: allTestsPassTestRunner
    });
    expectResultToHave(result, { total: 1, passed: 1, allPassed: true });
});