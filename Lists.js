/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
*/

var mergeTwoLists = function(l1, l2) {
  for (var i = l1.length -1; i >= 0; i--) {
    for (var j = l2.length -1; j >= 0; j--) {
      console.log(i,j)

      if (l2[j] >= l1[i]) {
        l1.splice(i+1, 0, l2[j]);
        l2.splice(j, 1);

      }
    }
  }
  return l1;
};


var listOne = [1,2,4];
var listTwo = [1,3,4];

mergeTwoLists(listOne, listTwo);

/*


Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4



Strategy:
//iterate through first list, and the second list
//adding values from the second list if the value is larger than the value from the first list
//return the first list



Time Complexity: o(n)


*/
