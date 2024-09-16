/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
  let low = Math.max(...weights);
  let high = findSum(weights);
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let numofDays = findNumofDays (weights , mid);
    if(numofDays <= days) {
        high = mid - 1;
    } else {
        low = mid + 1;
    }
  }
  return low;
};

function findNumofDays(weights , capacity) {
    let days = 1; 
    let load = 0;
    for(let i=0;i<weights.length;i++){
        if(load + weights[i] > capacity) {
            days++;
            load = weights[i]
        } else {
            load += weights[i]
        }
    }
    return days;
}

function findSum(weights){
    let sum = 0;
    for(let i = 0;i<weights.length;i++){
        sum += weights[i];
    }
    return sum;
}

let weights = [1,2,3,4,5,6,7,8,9,10];
console.log(shipWithinDays(weights,5));