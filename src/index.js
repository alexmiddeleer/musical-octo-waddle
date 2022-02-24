module.exports = function({tests} = {}) {
    return {
        total: tests && tests.length || 0,
        passed: 0
    };
};