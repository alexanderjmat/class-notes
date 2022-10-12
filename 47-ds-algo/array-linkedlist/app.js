class Node {
    constructor(val, next=null) {
        this.val = val;
        this.next = next
    }
}

// let node = new Node('1', new Node('2', new Node('3')))

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    traverse() {
        let current = this.head
        while (current) {
            console.log(current.val)
            current = current.next
        }
    }
    find(val) {
        let current = this.head
        while (current) {
            if (current.val == val) {
                return true
            }
            else {
                current = current.next
            }
        }
        return false;
    }
    append(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        this.tail.next = newNode
        this.tail = newNode
    }
}

let foodList = new LinkedList()
