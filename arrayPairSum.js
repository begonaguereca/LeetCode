var arrayPairSum = function(nums) {
  let final = 0;

   nums.sort((a, b) => {
      return a - b;
   });

  for (var i = 0; i < nums.length; i+=2) {
    final += nums[i];
  }
    return final;
};
