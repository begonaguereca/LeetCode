/*
START: 10:38
END:

Given an array of characters, compress it in-place.
The length after compression must always be smaller than or equal to the original array.
Every element of the array should be a character (not int) of length 1.
After you are done modifying the input array in-place, return the new length of the array.


Follow up:
Could you solve it using only O(1) extra space?

Note:
All characters have an ASCII value in [35, 126].
1 <= len(chars) <= 1000.

*/


var compress = function(chars) {
  let fast = 1,
  slow = 0,
  before = false;
  charsLen = chars.length;

  while (fast <= charsLen) {
    if (chars[slow] === chars[fast]) {
      start = slow;
      end = fast;
      before = true;
      fast++;
    } else {
      if (before) {
        let dupCount = fast - slow + '';
        dupCount.split('');
        chars.splice(start, (end - start));
        chars.splice(start+1,0,dupCount);
        before = false;
        slow = fast-1;
      }
      fast++;
      slow++;
    }
  }
  return chars;
};


let test = ["a","a","b","b","c","c","c"];
compress(test);


/*
EXAMPLE:
Input:
["a","a","b","b","c","c","c"]

Output:
Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

Explanation:
"aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".




Strategy:

going to loop through array with two pointers, one fast and slow
slow remains in place until fast is no longer equal to it.
splice out all of the dups except for one
split the dup count and insert those numbers into the array

return length of current array



Time Complexity:


*/
