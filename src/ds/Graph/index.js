export class Graph {
    /**
     * 
     * @param {boolean} isDirected 
     * @constructs Graph
     */
    constructor(isDirected = false) {
        this._isDirected = isDirected;
        this._vertices = [];
        this._edges = {};
    }

    /**
     * @returns {Array}
     */
    get vertices() {
        return this._vertices;
    }

    /**
     * 
     * @param {*} v
     * @returns {Graph} 
     */
    addVertex(v) {
        if (!this.hasVertex(v)) {
            this._vertices.push(v);
            this._edges[this._vertices.length - 1] = [];
        }

        return this;
    }

    /**
     * 
     * @param {*} v1 
     * @param {*} v2
     * @returns {Graph} 
     */
    addEdge(v1, v2) {
        if (this.hasEdge(v1, v2)) {
            return this;
        }

        // if some vertices are not part of the graph yet - add them
        this.addVertex(v1);
        this.addVertex(v2);

        const vi1 = this.vertexIndex(v1), vi2 = this.vertexIndex(v2);
        
        this._edges[vi1].push(vi2);

        // if graph is undirected relation should go both ways
        if (!this._isDirected) {
            this._edges[vi2].push(vi1);
        }

        return this;
    }

    /**
     * 
     * @param {*} v1 
     * @param {*} v2
     * @returns {Graph} 
     */
    removeEdge(v1, v2) {
        if (!this.hasVertex(v1) || !this.hasVertex(v2)) {
            return this;
        }

        const vi1 = this.vertexIndex(v1), vi2 = this.vertexIndex(v2);

        this._edges[vi1] = this._edges[vi1].filter(i => i !== vi2);

        if (!this._isDirected && this.hasEdge(v2, v1)) {
            this._edges[vi2] = this._edges[vi2].filter(i => i !== vi1);
        }

        return this;
    }

    /**
     * 
     * @param {*} v
     * @returns {boolean} 
     */
    hasVertex(v) {
        return this._vertices.indexOf(v) !== -1;
    }

    /**
     * 
     * @param {*} v1
     * @param {*} v2
     * @returns {boolean} 
     */
    hasEdge(v1, v2) {
        if (!this.hasVertex(v1) || !this.hasVertex(v2)) {
            return false;
        }

        const vi1 = this.vertexIndex(v1), vi2 = this.vertexIndex(v2);

        return this._edges[vi1].includes(vi2)
    }

    /**
     * 
     * @param {*} v
     * @returns {number} 
     */
    vertexIndex(v) {
        return this._vertices.indexOf(v);
    }

    /**
     * 
     * @param {number} i 
     * @returns {*}
     */
    findVertexByIndex(i) {
        return this._vertices[i] || null;
    }

    /**
     * 
     * @param {*} v
     * @returns {Array[number]} 
     */
    adjacentVertices(v) {
        return (this._edges[this.vertexIndex(v)] || []).map(x => this.findVertexByIndex(x));
    }
}