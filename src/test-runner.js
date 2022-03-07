class Test {
    constructor(description, fn) {
        this.description = (description + '') || 'No description for test';
        this.fn = fn instanceof Function ? fn : (() => 0);
    }
}

function _expect(actualVal) {
    return {
        toBe: function toEqual(expectedVal) {
            this.recordAssertion({
                pass: actualVal == expectedVal
            });
        }.bind(this)
    };
}

function _recordAssertion(assertion) {
    if(assertion.pass) {
        this.passedAssertions.push(assertion);
    } else {
        this.failedAssertions.push(assertion);
    }
}

module.exports = function runTest(t) {
    if(!(t instanceof Test)) {
        t = t || {};
        t = new Test(t.description, t.fn);
    }
    let e = _expect;
    let r = _recordAssertion;
    const testThis = {
        test: t,
        failedAssertions: [],
        passedAssertions: []
    };
    testThis.expect = e;
    testThis.recordAssertion = r;
    e = e.bind(testThis);
    r = r.bind(testThis);
    t.fn.call(testThis);
    if(testThis.passedAssertions.length < 1) return false;
    return testThis.failedAssertions.length <= 0;
}; 