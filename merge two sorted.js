/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0

Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5

*/

var findMedianSortedArrays = function(nums1, nums2) {
  let merge = nums1.concat(nums2);
  let len = merge.length;
  merge.sort((a,b)=> {return a-b});

  if(len % 2 === 0) {
    let middle = len/2;
    return (merge[middle-1] + merge[middle])/2;
  } else {
    let middle = Math.floor(len/2);
    console.log(middle)
    return merge[middle];
  }
};

// let result = [];
//   while(nums1.length && nums2.length) {
//     if(nums1[0] < nums2[0]) {
//       result.push(nums1.shift())
//     } else {
//       result.push(nums2.shift())
//     }
//   }
//   result = [...result, ...nums1, ...nums2];
//   const mid = Math.floor(result.length/2);
//   if(result.length % 2  === 0) {
//     return (result[mid-1] + result[mid]) /2;
//   } else {
//     return result[mid];
//   }

// };


let nums1 = [1, 3],
nums2 = [2]

findMedianSortedArrays(nums1, nums2);
