/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let n = matrix.length;
    let m = matrix[0].length;
    let low = 0;
    let high = m * n - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let row = Math.floor(mid / m);
        let column = mid % m;
        if(matrix[row][column] == target) return true;
        else if (matrix[row][column] < target) low = mid + 1;
        else high = mid - 1;
    }  
    return false;
};

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
console.log(searchMatrix(matrix,3));