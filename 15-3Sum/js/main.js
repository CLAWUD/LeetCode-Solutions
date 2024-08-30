/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // Sort the array using a compare function for numerical sorting
    nums.sort((a, b) => a - b);

    let arr = [];

    for (let i = 0; i < nums.length; i++) {
        // Skip duplicates for the first number
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            if (sum < 0) {
                j++;
            } else if (sum > 0) {
                k--;
            } else {
                // Found a triplet
                arr.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;

                // Skip duplicates for the second and third numbers
                while (j < k && nums[j] === nums[j - 1]) j++;
                while (j < k && nums[k] === nums[k + 1]) k--;
            }
        }
    }

    return arr;
};
