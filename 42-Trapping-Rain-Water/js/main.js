/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function(height) {
    let lMax = rMax = total =0;
    let l = 0;
    let r = height.length - 1;
    while (l < r) {
        if(height[l] < height[r]) {
            if(lMax > height[l]){
                total += lMax - height[l]
            } else {
                lMax = height[l]
            }
            l++
        } else {
            if(rMax > height[r]){
                total += rMax - height[r]
            } else {
                rMax = height[r]
            }
            r--;
        }
    }
    return total;
};

let height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(height))
