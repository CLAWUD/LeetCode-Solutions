/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let low = 0;
    let high = nums.length - 1;
    let min = nums[0];
    while (low <= high){
        let mid = Math.floor((low + high) / 2);
        if (nums[low] <= nums[mid]){
            if (min >= nums[low]) min=nums[low];
            low = mid + 1;
        } else {
            min = Math.min(min,nums[mid]);
            high = mid - 1;
        }
    }
    return min;
};