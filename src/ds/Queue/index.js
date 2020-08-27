export class Queue {
    constructor() {
        this._q = [];
    }

    /**
     * @returns {boolean}
     */
    get isEmpty() {
        return !this._q.length;
    }

    /**
     * 
     * @param {*} val
     * @return {Queue} 
     */
    enqueue(val) {
        this._q.push(val);
        return this;
    }

    /**
     * @returns {*}
     */
    dequeue() {
        return this._q.shift();
    }
}