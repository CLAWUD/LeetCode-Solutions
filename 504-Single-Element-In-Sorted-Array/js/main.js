
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let n = nums.length;
    if (n === 1) return nums[0];
    if (nums[0] != nums[1]) return nums[0];
    if (nums[n-1] != nums[n-2]) return nums[n-1];

    let low = 0;
    let high = n - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] != nums[mid-1] && nums[mid] != nums[mid+1]) return nums[mid];
        if ((mid % 2 === 1 && nums[mid] === nums[mid-1]) ||
            (mid % 2 === 0 && nums[mid] === nums[mid+1])) {
            low = mid + 1;
        }
        if ((mid % 2 === 1 && nums[mid] === nums[mid+1]) ||
            (mid % 2 === 0 && nums[mid] === nums[mid-1])) {
            high = mid - 1;
        }
    }
};

let nums=[1,1,2,2,3,3,4,4,5,5,7,8,8,9,9,10,10];
console.log(singleNonDuplicate(nums));