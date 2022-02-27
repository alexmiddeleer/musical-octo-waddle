module.exports = {
    ensureArray: x => Array.isArray(x) ? x : [],
    ensureFn: x => typeof x === 'function' ? x : () => 0
};