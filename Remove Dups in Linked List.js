/*
Remove Dups: Write code to remove duplicates from an unsorted linked list.
FOLLOW UP:
How would you solve this problem if a temporary buffer is not allowed?

*/

const removeDups = (chains) => {
  let prev = chains;
  let current = chains.next;
  let dupsHodler = {};

  while(current !== null) {
    if (!dupsHodler[current.val]) {
      dupsHodler[prev.val] = true;
    } else {
      prev.next = current.next;
    }
    prev = current;
    current = current.next;
  }
  return chains;
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



removeDups(linkedList);

/*
EXAMPLE:

Input:

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
}

Output:

let noDupsList = {
  val: 2,
  next: {
    val: 5,
    next: null
  }
}





Strategy:

Iterate through linkedList, checking to see if the current value is in checker obj
if no adde value to obj
if yes then delete nodes from linkedList
return linkedList

10----- {} --- no
2 ------{10:1}--- no
10 ------{10:1, 2:1}--- YES
5 ------{10:2, 2:1}--- no

Time Complexity: O(n)


*/
