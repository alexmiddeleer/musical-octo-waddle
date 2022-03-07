const runTest  = require('../src/test-runner');
test('When no assertions, test should fail', () => {
    expect(runTest()).toBeFalsy();
});

test('a passing test should pass', () => {
    expect(runTest({
        description: 'a passing test',
        fn: function() {
            this.expect(2).toBe(2);
        }
    })).toBeTruthy();
});

test('a failing test should fail', () => {
    expect(runTest({
        description: 'a passing test',
        fn: function() {
            this.expect(2).toBe(1);
        }
    })).toBeFalsy();
});