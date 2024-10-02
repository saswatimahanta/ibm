// Reverse Linked List 2: 
// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

// Example 2:
// Input: head = [5], left = 1, right = 1
// Output: [5]
 
// Constraints:
// The number of nodes in the list is n.
// 1 <= n <= 500
// -500 <= Node.val <= 500
// 1 <= left <= right <= n

var reverseBetween = function (head, left, right) {
    // If the list is empty or left position is the same as right, return the 
    // original list
    if (!head || left === right) {
        return head;
    }

    // Create a dummy node to handle edge case when left = 1
    const dummy = new LinkedList(0);
    dummy.next = head;
    let prev = dummy;

    // Move prev to the node just before the left position
    for (let i = 0; i < left - 1; i++) {
        prev = prev.next;
    }

    // Current node is the node at left position
    let curr = prev.next;

    // Reverse the portion of the linked list between left and right positions
    for (let i = 0; i < right - left; i++) {
        const nextNode = curr.next;
        curr.next = nextNode.next;
        nextNode.next = prev.next;
        prev.next = nextNode;
    }

    // Return the updated head of the linked list
    return dummy.next;
};

class LinkedList {
    constructor() {
        this.head = null;

        // insertNodeAtHead method will insert a LinkedListNode at head
        // of a linked list.
        this.insertNodeAtHead = function (node) {
            if (this.head != null) {
                node.next = this.head;
                this.head = node;
            } else this.head = node;
        };

        // createLinkedList method will create the linked list using the
        // given integer array with the help of InsertAthead method.
        this.createLinkedList = function (list) {
            list.reverse().forEach((element) => {
                let newNode = new LinkedListNode(element);
                this.insertNodeAtHead(newNode);
            });
        };

        // This method will display the elements of the linked list.
        this.display = function () {
            let result = "",
                temp = this.head;
            while (temp != null) {
                result += temp.data;
                temp = temp.next;
                if (temp != null) {
                    result += ", ";
                }
            }
            result += "";
            return result;
        };
    }
}

class LinkedListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
