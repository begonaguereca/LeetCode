/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.
Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

*/

const medianTwoSorted = (arr1, arr2) => {
  var join = arr1.concat(arr2);
  join.sort(function(a, b) {
    return a - b;
  });

  let index = Math.ceiling(join.length/2);

  if (join.length % 2 === 0) {
    let index2 = index - 1;
    return (join[index1] + join[index2])/2;

  } else {
    return join[index];
  }
};



/*
///////////////////WORK FOR NAIVE SOLUTION////////////////////
Input: A = [1,2,5], [4,6,8]
Output: integer


Strategy:
  Concat both indexes
  sort the new array

  if arr length === even then find middle two numbers and find the average of the two
  if arr length === odd then find middle number and return

Time Complexity:
Sorting funciton - O(n)
Index Lookup - O(n)

  O(n)+ O(n)


/////////////////////////OPTIMIZING WORLD////////////////////

So my above soltution was what first came to mind, even though I know it
doesn't solve the problem under the Time complexity constraints

SO we need this sorting sitution to be  O(log (m+n))

The only things that I know that are  O(log (n)) are:
  - Binary trees
  - Quick Sort?

I'm not sure how BINARY TREES could be used here, would I be constructing
one tree merging both of the arrays? That seems like an expensive operation....


QUICK SORT would probably do the job if we merge both arrays, but I dont think I fully
understand quicksort. I've always started with the first index in the array and since this particualar
has the int 1 for the first index so theres no where for me to insert 1 and split off into subarrays

THEN I think that this has to be a waste of an operation because both of these arrays
are already sorted..... so there has to be an easier approach out there


I found a solution I likedin the interwebs that made sense to me when
both arrays are odd. Pretty much it says to find the median value of both, and if the A array
median value is smaller than the B median value then slice off the first two in A and the last
two in B. Keep doing this until there are two left. This is COOL but does not work with edge cases


HELP the solutions out there seem so cluttered

*/
