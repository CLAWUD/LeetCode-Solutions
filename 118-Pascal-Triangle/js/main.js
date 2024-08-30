/**
 * @param {number} numRows
 * @return {number[][]}
 */
function nCr(n, r) {
    let res = 1;
  
    // calculating nCr:
    for (let i = 0; i < r; i++) {
      res = res * (n - i);
      res = res / (i + 1);
    }
    return parseInt(res);
}
var generate = function(numRows) {
    const ans = [];

// Store the entire Pascal's triangle:
for (let row = 1; row <= numRows; row++) {
  const tempLst = []; // temporary list
  for (let col = 1; col <= row; col++) {
    tempLst.push(nCr(row - 1, col - 1));
  }
  ans.push(tempLst);
}
return ans;
};