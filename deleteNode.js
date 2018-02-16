function deleteNode(n, linkedList) {

  if (linkedList.node === n) {
    return linkedList.next;
  } else {
    let previousNode = linkedList;
    let current = linkedList.next;

    while (current.node) {

      if (current.next.node === n) {
        break;
      } else {
        previousNode.next = current.next;
        current = current.next;
      }
    }
  }
}


// const addNode = (linkedList, newNode) => {
//   let temp = {node: newNode, next:null};

//   if (linkedList === undefined) {
//     return temp;
//   } else {
//     let curr = linkedList;

//     while (linkedList.node) {
//       if(!linkedList.next) {
//         linkedList.next = temp;
//       } else {
//         curr = curr.next;
//       }
//     }
//     return curr;
//   }
// };





/////////////////////////////////////////

let linkedList = {
  node: 10,
  next:{
    node: 5,
    next: {
      node: 4,
      next: {
        node: 2,
        next:null
      }
    }
  }
};


deleteNode(2,linkedList);


//////


/*
holderBefore:
holderAfter:

Iterate through the linked list saving current portion to the hodlerBefore node. Keep building this until hit the target node
  save the portion of the linkedList to the holderAfter var

  merge  and return holderBefore + holderAfter






*/
