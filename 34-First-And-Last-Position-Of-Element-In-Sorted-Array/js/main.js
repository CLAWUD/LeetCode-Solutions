var searchRange = function(nums, target) {
    var firstO= firstOccurence(nums,target);
    if(firstO == -1) return [-1,-1];
    var lastO = lastOccurence(nums,target);
    return [firstO,lastO];
};

function firstOccurence(nums,target){
    let low=0;
    let high=nums.length-1;
    let first=-1;
    while(low <= high){
        let mid=Math.floor((low+high)/2);
        if(nums[mid] == target){
            first=mid;
            high = mid - 1;
        } else if (target < nums[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return first;
}

function lastOccurence(nums,target){
    let low=0;
    let high=nums.length-1;
    let last=-1;
    while(low <= high){
        let mid=Math.floor((low+high)/2);
        if(nums[mid] == target){
            last=mid;
            low = mid + 1;
        } else if (target < nums[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return last;
}
let nums=[1,2,3,4,5,5,5,5,5,6,7,8,9];
console.log(search(nums,5));
