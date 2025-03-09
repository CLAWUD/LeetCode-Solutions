/**
 * @param {number[]} arr
 * @return {number}
 */





var sumSubarrayMins = function(arr) {
    let total = 0;
    let n = arr.length;
    for (let start = 0; start < n; start++) {
        let subarray = [];
        for (let end = start; end < n; end++) {
            subarray.push(arr[end]); 
            total += Math.min(...subarray);
        }
    }
    return total;
};


// Example usage:
let arr = [11,81,94,43,3];
console.log(sumSubarrayMins(arr));