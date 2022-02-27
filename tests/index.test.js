const testFn = require('../src/index');

const allTestsPassTestRunner = () => true;
const minimalTest = {};

const expectResultToHave = (result, {total, passed, allPassed}) => {
    expect(typeof result).toBe('object');
    expect(result.total).toBe(total);
    expect(result.passed).toBe(passed);
    expect(!!result.allPassed).toBe(!!allPassed);
    expect(Array.isArray(result.failedTests)).toBeTruthy();
    expect(Array.isArray(result.passedTests)).toBeTruthy();
    expect(result.failedTests.length).toBe(total-passed);
    expect(result.passedTests.length).toBe(passed);
};

test('calling default fn returns a report', () => {
    const result = testFn();
    expectResultToHave(result, { total: 0, passed: 0, allPassed: true });
});

test('calling default fn with a single test', () => {
    const result = testFn({
        tests: [minimalTest]
    });
    expectResultToHave(result, { total: 1, passed: 0, allPassed: false });
    expect(result.failedTests[0]).toBe(minimalTest);
});

test('calling default fn with a single passing test', () => {
    const result = testFn({
        tests: [minimalTest],
        testRunner: allTestsPassTestRunner
    });
    expectResultToHave(result, { total: 1, passed: 1, allPassed: true });
    expect(result.passedTests[0]).toBe(minimalTest);
});

test('calling default fn with consoleWriter fn calls consoleWritern fn w/ printed report', () => {
    const mockConsoleWriterFn = jest.fn();
    testFn({
        tests: [minimalTest],
        testRunner: allTestsPassTestRunner,
        consoleWriter: mockConsoleWriterFn
    });
    expect(mockConsoleWriterFn).toHaveBeenCalled();
    expect(mockConsoleWriterFn.mock.lastCall[0]).toContain('PASS');
});