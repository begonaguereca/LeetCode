var rotate = function(nums, k) {

    for (var i = 0; i < k; i++) {
        let end = nums.pop();
        nums.unshift(end);
    }
    console.log(nums)
};


rotate([0,1,2,3,4], 2)
