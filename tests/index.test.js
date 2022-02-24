const testFn = require('../src/index');

test('calling test returns a report', () => {
    const result = testFn();
    expect(typeof result).toBe('object');
    expect(result.total).toBe(0);
    expect(result.passed).toBe(0);
    expect(result.allPassed).toBeFalsy();
});
