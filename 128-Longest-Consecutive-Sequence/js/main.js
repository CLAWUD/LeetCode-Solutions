/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length==0) return 0;
    nums.sort((a, b) => a - b);
    let count=1;
    let longest=1;
    let lastMin=nums[0];
    for(let i=0;i<nums.length;i++){
        if(nums[i]-1==lastMin){
            count++;
            lastMin=nums[i];
        } else if(nums[i] != lastMin){
            count=1;
            lastMin=nums[i];
        }
        longest=Math.max(longest,count);
    }
    return longest;
};