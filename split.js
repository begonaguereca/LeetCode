
 function ListNode(val) {
     this.val = val;
    this.next = null;
 }

/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function(head) {
    this.head = head;

};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    let count = 0,
        position = null,
        ticker = 0,
        current = this.head;

    while(current) {
        count++;
        current = current.next;
    }
    current = this.head;
    position = Math.floor(Math.random() * count);

    while(current) {
        if(ticker === position) {
            return current.val;
            break;
        } else {
            ticker++;
            current = current.next;
        }

    }
};

head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
solution = new Solution(head);

// getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.
let thing = solution.getRandom();

console.log('thing', thing)
