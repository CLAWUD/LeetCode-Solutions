function majority(nums){
    let n = nums.length;
    let cnt = 0; 
    let el; 

    for (let i = 0; i < n; i++) {
        if (cnt === 0) {
            cnt = 1;
            el = nums[i];
        } else if (el === nums[i]) {
            cnt++;
        } else {
            cnt--;
        }
    }

    let cnt1 = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] === el) {
            cnt1++;
        }
    }

    if (cnt1 > Math.floor(n / 3)) {
        return el;
    }
    return -1;
}