/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head == null || head.next == null) return head;
    let tail = head;
    let length = 1;
    while(tail.next != null) {
        length++;
        tail = tail.next;
    }
    if(k % length == 0) return head;
    k = k % length;
    tail.next = head;
    let newLastNode = findNthnode(head,length-k);
    head = newLastNode.next;
    newLastNode.next = null;
    return head;
};

function findNthnode(temp, k) {
    let count = 1;
    while(temp != null) {
        if(count == k) return temp;
        count ++;
        temp = temp.next;
    }
    return temp;
}