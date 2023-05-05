"use strict";
export default class Queue {
    SIZE_0 = 128;
    size = this.SIZE_0;
     content = new Array(this.SIZE_0);
     head = 0;
     tail = 0;

    enqueue(x) {
        if (this.head - this.tail >= this.size - 1) {
            // Duplico la array
            this.content.push(...new Array(this.size));
            this.size *= 2;
        }
        this.content[this.head++ % this.size] = x;
    }
    /**
     * Si esta vacia devuelve null. TODO Symbol.iterator
     */
    pop() {
        const ret = this.peek();
        this.tail++;
        return ret;
    }
    peek() {
        if (this.tail === this.head) {
            return null;
        }
        return this.content[this.tail % this.size];
    }
}