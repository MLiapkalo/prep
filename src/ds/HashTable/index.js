import { isPowOf2, nearestPowOf2 } from '../../helpers/math';

// Implemented with help of https://www.youtube.com/watch?v=b0858c55TGQ

const DEFAULT_SIZE = 8;
const MAX_LOAD_FACTOR = 0.4;

// for simplicity sake hash function returns sum of string char codes
const hashFn = key => [...key].reduce((sum, char) => sum + char.charCodeAt(0), 0);
// quadratic probing function, to keep it from infinite loop hash table size
// should always be a power of 2 (e.g. 4, 8, 16, 32...)
const probingFn = x => (Math.pow(x, 2) + x) / 2;

export class HashTable {
    constructor(initialSize = DEFAULT_SIZE) {
        // keep the table size as a power of two
        // otherwise probing function will end up in the infinite loop
        const size = isPowOf2(initialSize) 
            ? initialSize 
            : nearestPowOf2(initialSize);
        this._values = Array(size).fill(null);
        // keep track of inserted keys
        this._keys = {};
    }

    get size() {
        return this._values.length;
    }

    get keys() {
        return Object.keys(this._keys);
    }

    get values() {
        return this._values.filter(value => value !== null);
    }

    get threshold() {
        return Math.floor(this.size * MAX_LOAD_FACTOR);
    }

    /**
     * 
     * @param {string} key 
     */
    get(key) {
        const index = this._keys[key];
        if (index !== undefined) return this._values[index];
    }

    /**
     * 
     * @param {string} key 
     * @param {*} value 
     */
    insert(key, value) {
        // in case key is already in table update its value
        if (this.has(key)) {
            const index = this._keys[key];
            this._values[index] = value;
        }

        // if threshold has been reached table should be resized
        if (this.values.length === this.threshold) {
            this.resize();
        }

        const keyHash = hashFn(key) % this.size;
        let probe = 1;
        let index = keyHash;

        while (this._values[index] !== null) {
            index = (keyHash + probingFn(probe)) % this.size;
            probe++;
        }

        this._values[index] = value;
        this._keys[key] = index;
    }

    resize() {
        const prevSize = this.size;
        this._values = [...this._values, ...Array(prevSize).fill(null)];
    }

    /**
     * 
     * @param {string} key 
     */
    has = key => this._keys[key] !== undefined;
}