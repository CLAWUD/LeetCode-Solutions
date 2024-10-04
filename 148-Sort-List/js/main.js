/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head) return null;

    let arr = [];
    let current = head;

    while (current) {
        arr.push(current.val);
        current = current.next;
    }

    arr.sort((a, b) => a - b);

    let newll = new ListNode(0);
    current = newll;

    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return newll.next;
};