/*
Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".

*/

var reverseString = function(s) {
  let containerLetters = s.split('');
  let right = containerLetters.length - 1;

  console.log(containerLetters);

  for (var i = 0; i < Math.floor(containerLetters.length/2); i++) {
    let temp = containerLetters[i];
    containerLetters[i] = containerLetters[right];
    containerLetters[right] = temp;
    right--;
  }
  return containerLetters.join('');
};


reverseString('begona');



/*
Input: 'begona'

Output: 'anogeb'



Strategy:

Iterate through half of the string having a pointer start and the end of the Array
swap the first values with the last value

Time Complexity: O(log n)


*/
