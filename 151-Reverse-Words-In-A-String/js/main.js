/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let word = '';
    let i = s.length - 1;
    let result = '';
    while (i >= 0) {
        while (i >= 0 && s[i] === ' ') i--;
        while (i >= 0 && s[i] !== ' ') {
            word = s[i] + word;
            i--;
        }

        if (word !== '') {
            if (result !== '') {
                result += ' ';
            }
            result += word;
        }
        word = '';
    }
    return result;
};
