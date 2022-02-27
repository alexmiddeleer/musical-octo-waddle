module.exports = function printReport(report) {
    if(report.allPassed){
        return 'PASS';
    }
    return 'FAIL';
};