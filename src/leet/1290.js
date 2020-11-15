/*
    Given head which is a reference node to a singly-linked list.
    The value of each node in the linked list is either 0 or 1.
    The linked list holds the binary representation of a number.

    Return the decimal value of the number in the linked list.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue = head => {
    let node = head, num = head.val;
    
    while (node.next) {
        // num = num * 2 + node.next.val;
        num = (num << 1) | node.next.val;

        node = node.next;
    }
    
    return num;
};