/*
Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.

*/

var kToLast = function(list, k) {
  let counterList = [];
  let current = list;

  while (current.next !== null) {
    counterList.push(list.val);
    current = current.next;
  }

  return counterList[counterList.length - k];
};

let linkedList = {
  val: 10,
  next: {
    val: 2,
    next: {
      val: 10,
      next: {
        val: 5,
        next: null
      }
    }
  }
};

kToLast(linkedList, 2);


/*
EXAMPLE:
Input: 2    and

let linkedList = {
  val: 10,
  next: {
    val: 2,
    next: {
      val: 10,
      next: {
        val: 5,
        next: null
      }
    }
  }
};

Output: 10


Strategy: Iterate through linked List, push all of the values into an array. Once reached the end, then calc which one is k to the end



Time Complexity:


*/
