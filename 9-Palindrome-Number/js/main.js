/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;

    let original = BigInt(x);
    let reverse = 0n;
    let num = original;
  
    while (num > 0) {
        let last = num % 10n;
        reverse = (reverse * 10n) + last;
        num = num / 10n;
    }

    return original === reverse;
};
