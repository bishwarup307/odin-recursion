class Node {
    #value;
    #next;

    constructor(value, next) {
        this.#value = value ?? null;
        this.#next = next || null;
    }
    get value() {
        return this.#value;
    }

    set value(value) {
        this.#value = value;
    }

    get next() {
        return this.#next;
    }

    set next(node) {
        this.#next = node;
    }
}

class LinkedList {
    constructor(node) {
        this.start = node || null;
    }

    getValues() {
        const values = [];

        let current = this.start;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }

    isEmpty() {
        return this.size() === 0;
    }

    toString() {
        let str = "";
        this.getValues().forEach((value) => {
            str += `( ${value} ) -> `;
        });
        str += "null";
        return str;
    }

    size() {
        let len = 0;
        let current = this.start;
        while (current) {
            len += 1;
            current = current.next;
        }
        return len;
    }

    head() {
        return this.start;
    }

    tail() {
        let last = this.start;
        for (let i = 0; i < this.size() - 1; i++) {
            last = last.next;
        }
        return last;
    }

    append(value) {
        if (this.size() === 0) this.start = new Node(value);
        else this.tail().next = new Node(value);
    }

    prepend(value) {
        this.start = new Node(value, this.start);
    }

    at(index) {
        if (index >= this.size()) return null;
        let current = this.start;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    pop() {
        if (this.isEmpty()) return;
        if (this.size() === 1) this.start = null;
        else this.at(this.size() - 2).next = null;
    }

    unshift() {
        if (this.isEmpty()) return;
        if (this.size() === 1) this.start = null;
        else this.start = this.at(1);
    }

    insertAt(value, index) {
        if (index >= this.size())
            throw new Error(
                `Index (${index}) out of range, list length is ${this.size()}`
            );

        if (index === 0) this.prepend(value);
        else {
            const current = this.at(index);
            const before = this.at(index - 1);
            before.next = new Node(value, current);
        }
    }

    removeAt(index) {
        if (index >= this.size())
            throw new Error(
                `Index (${index}) out of range, list length is ${this.size()}`
            );
        if (index === 0) this.unshift();
        else if (index === this.size() - 1) this.pop();
        else {
            const prev = this.at(index - 1);
            const next = this.at(index + 1);
            prev.next = next;
        }
    }

    find(value) {
        if (this.size() === 0) return;
        let current = this.start;
        let index = 0;
        while (current) {
            if (current.value === value) return index;
            current = current.next;
            index += 1;
        }
        return null;
    }

    contains(value) {
        return this.find(value) !== null;
    }
}

// const node = new Node(2);
const list = new LinkedList();
list.append(2);
list.append(3);
list.append(4);
list.removeAt(1);
// console.log(list.toString());
list.append(5);
list.append(16);

list.prepend(0);
list.prepend(-30);
list.prepend(98);

console.log(list.toString());
console.log(list.contains(16));

// console.log(list.size());
// console.log(list.head().value);
// console.log(list.tail().value);

// console.log(list.at(5).value);
// list.pop();
// console.log(list.toString());
// console.log(list.size());

// console.log("----------");
// list.insertAt(100, 4);
// console.log(list.toString());
// console.log(list.size());
