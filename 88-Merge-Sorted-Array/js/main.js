function swapIfGreater(nums1, nums2, n, m) {
    if (nums1[n] > nums2[m]) {
      [nums1[n], nums2[m]] = [nums2[m], nums1[n]];
    }
  }
  
  var merge = function(nums1, m, nums2, n) {
    const len = n + m;
    let gap = Math.ceil(len / 2);
    
    while (gap > 0) {
      let left = 0;
      let right = left + gap;
  
      while (right < len) {
        if (left < m && right >= m) {
          swapIfGreater(nums1, nums2, left, right - m);
        } else if (left >= m) {
          swapIfGreater(nums2, nums2, left - m, right - m);
        } else {
          swapIfGreater(nums1, nums1, left, right);
        }
        left++;
        right++;
      }
  
      if (gap == 1) break;
      gap = Math.ceil(gap / 2);
    }
  
    let i = m;
    for (let j = 0; j < n; j++) {
      nums1[i] = nums2[j];
      i++;
    }
  };
  