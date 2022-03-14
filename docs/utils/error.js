/**
 * 抛出错误
 * @param {*} fn 
 */
function throwError(fn) {
    try {
        fn();
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    throwError
}