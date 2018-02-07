var removeElements = function(head, val) {
  let previous =  null;
  let current = head;

  while (current !== null) {
    if (current.val === val) {
        if (previous) {
            previous.next = current.next;
         } else {
            head = current.next;
         }
    } else {
    previous = current;
    }
    current = current.next;
  }
  return head;
};
