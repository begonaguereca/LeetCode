var intersection = function(nums1, nums2) {
  var dupsHolder = [],
      longest = nums1.length >= nums2.length? nums1: nums2,
      shortest = longest === nums1? nums2 : nums1;

      //console.log(longest, shortest)

    longest.forEach(val => {
        if(shortest.indexOf(val) !== -1) {
          console.log('here')
            if(dupsHolder.indexOf(val) === -1) {
                dupsHolder.push(val);
            }
        }
    });

    return dupsHolder;
};


intersection([1], [1])
