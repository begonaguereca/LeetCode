/*

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

*/

function ListNode(val) {
  this.val = val;
  this.next = null;
 }

var addTwoNumbers = function(l1, l2) {
  let  traverseList = '',
  finalList = '',
  leftOver = 0;

   while(l1 || l2 || leftOver !== 0) {
    let curr;

    if(l1 && l2) {
      curr = l1.val + l2.val + leftOver;
      l1 = l1.next;
      l2 = l2.next;
    } else if (l1) {
      curr = l1.val + leftOver;
      l1 = l1.next;
    } else if (l2) {
      curr = l2.val + leftOver;
      l2 = l2.next;
    } else {
      curr = leftOver;
    }


    if(finalList === '') {
      if(curr < 10) {
        traverseList = new ListNode(curr);
        finalList = traverseList
        leftOver = 0;
      } else {
        leftOver = 1;
        console.log('one', curr)
        curr = curr - 10;
        traverseList = new ListNode(curr);
        finalList = traverseList
      }
    } else {
      if(curr < 10) {
       finalList.next = new ListNode(curr);
       finalList = finalList.next
       leftOver = 0;
      } else {
        leftOver = 1;
        curr = curr-10;
        finalList.next = new ListNode(curr);
        finalList = finalList.next
      }
    }
    console.log('hre', finalList, curr, leftOver);
  }
  return traverseList;
};



let l1 = {
  val: 9,
  next: null },
  l2 = {
  val: 9,
  next:  null };


addTwoNumbers(l1, l2);
