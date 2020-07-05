// WIP
export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = this.head;
    }

    get size() {
        let size = 0;
        this.doTraversal(() => size++);
        return size;
    }

    prepend(node) {
        if (this.head) {
            node.next = this.head;
            this.head = node;
        } else {
            this.head = node;
            this.tail = this.head;
        }

        return this;
    }

    append(node) {
        if (this.tail) {
            this.tail.next = node;
            this.tail = node;
        } else {
            this.tail = node;
            this.head = this.tail;
        }

        return this;
    }

    popLeft() {
        if (this.head && this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
        }

        return this;
    }

    popRight() {
        if (!this.head) {
            return this;
        }

        let leading = this.head.next;
        let following = this.head;

        while(leading.next) {
            leading = leading.next;
            following = following.next;
        }

        this.tail = following;
        this.tail.next = null;

        return this;
    }

    doTraversal(cb) {
        let current = this.head;
        while(current) {
            cb(current);
            current = current.next;
        }

        return this;
    }

    contains(value) {
        let current = this.head;

        while(current) {
            if (current.value === value) {
                return true;
            } else {
                current = current.next;
            } 
        }

        return false;
    }
}