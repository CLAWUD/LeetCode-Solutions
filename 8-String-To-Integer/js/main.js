/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    if (s.length === 0) return 0;

   let i = 0;

   while (i < s.length && s[i] === ' ') {
       i++;
   }

   if (i >= s.length) return 0;

   let sign = 1;
   if (s[i] === '-' || s[i] === '+') {
       sign = s[i] === '-' ? -1 : 1;
       i++;
   }

   let ans = 0;
   const MAX = Math.pow(2, 31) - 1; 
   const MIN = -Math.pow(2, 31);  

   
   while (i < s.length && s[i] >= '0' && s[i] <= '9') {
       ans = ans * 10 + (s[i] - '0');

       if (sign === -1 && -ans < MIN) return MIN;
       if (sign === 1 && ans > MAX) return MAX;

       i++;
   }

   return sign * ans;
};
