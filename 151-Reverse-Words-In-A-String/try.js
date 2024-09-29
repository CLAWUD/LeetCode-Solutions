/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateStrings = function(s, goal) {
    for(let i = 0; i < s.length; i++){
        if(goal == rotateString(s,i)){
            return true;
        }
    }
    return false;
};

function rotateString(s, n) {
    n = n % s.length; 
    return s.slice(-n) + s.slice(0, -n);
}

console.log(rotateStrings("abcde","cdbab"))