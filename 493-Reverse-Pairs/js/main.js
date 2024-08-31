/**
 * @param {number[]} nums
 * @return {number}
 */
function merge(arr, low, mid, high) {
    let temp = []; // temporary array
    let left = low; // starting index of left half of arr
    let right = mid + 1; // starting index of right half of arr
  
    // storing elements in the temporary array in a sorted manner
    while (left <= mid && right <= high) {
      if (arr[left] <= arr[right]) {
        temp.push(arr[left]);
        left++;
      } else {
        temp.push(arr[right]);
        right++;
      }
    }
  
    // if elements on the left half are still left
    while (left <= mid) {
      temp.push(arr[left]);
      left++;
    }
  
    // if elements on the right half are still left
    while (right <= high) {
      temp.push(arr[right]);
      right++;
    }
  
    // transferring all elements from temporary to arr
    for (let i = low; i <= high; i++) {
      arr[i] = temp[i - low];
    }
  }
  
  function countPairs(arr, low, mid, high) {
    let right = mid + 1;
    let cnt = 0;
    for (let i = low; i <= mid; i++) {
      while (right <= high && arr[i] > 2 * arr[right]) right++;
      cnt += right - (mid + 1);
    }
    return cnt;
  }
  
  function mergeSort(arr, low, high) {
    let cnt = 0;
    if (low >= high) return cnt;
    let mid = Math.floor((low + high) / 2);
    cnt += mergeSort(arr, low, mid); // left half
    cnt += mergeSort(arr, mid + 1, high); // right half
    cnt += countPairs(arr, low, mid, high); // Modification
    merge(arr, low, mid, high); // merging sorted halves
    return cnt;
  }
  
    
  var reversePairs = function(nums) {
      let n=nums.length;
      return mergeSort(nums, 0, n - 1);
  };