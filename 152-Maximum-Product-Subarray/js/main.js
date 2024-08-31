var maxProduct = function(nums) {
  let prefix=1;
  let suffix=1;
  let maxP=nums[0];
  for(let i=0;i<nums.length;i++){
    if(prefix == 0) prefix=1;
    if(suffix == 0) suffix=1;
    prefix = prefix * nums[i];
    suffix = suffix * nums[nums.length-i-1];
    maxP=Math.max(maxP,Math.max(prefix,suffix));
  }  
  return maxP;
};

