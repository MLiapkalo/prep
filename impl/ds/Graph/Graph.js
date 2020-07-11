import { Vertex } from './Vertex';

export class Graph {
    constructor(isDirected = false) {
        this.adjLists = {};
        this.isDirected = isDirected;
    }

    addVertex(vertex) {
        if (vertex && vertex instanceof Vertex && !this.hasVertex(vertex)) {
            this.adjLists[vertex.key] = [];
        }
        
        return this;
    }

    addEdge(startVertexKey, endVertexKey) {
        if (this.hasVertex(startVertexKey) && this.hasVertex(endVertexKey)) {
            this.adjLists[startVertexKey].push(endVertexKey);

            if (!this.isDirected) {
                this.adjLists[endVertexKey].push(startVertexKey);
            }
        }

        return this;
    }

    removeEdge(startVertexKey, endVertexKey) {
        if (this.hasVertex(startVertexKey) && this.hasVertex(endVertexKey)) {
            this.adjLists[startVertexKey] = this.adjLists[startVertexKey].filter(vertexKey => vertexKey !== endVertexKey);

            if (!this.isDirected) {
                this.adjLists[endVertexKey] = this.adjLists[endVertexKey].filter(vertexKey => vertexKey !== startVertexKey);
            }
        }

        return this;
    }

    hasVertex(vertexKey) {
        return this.adjLists[vertexKey] !== undefined;
    }

    getAdjList(vertexKey) {
        return this.adjLists[vertexKey];
    }

    hasEdge(startVertexKey, endVertexKey) {
        if (!this.hasVertex(startVertexKey) || !this.hasVertex(endVertexKey)) {
            return false;
        }

        return this.isDirected 
            ? this.getAdjList(startVertexKey).includes(endVertexKey)
            : this.getAdjList(startVertexKey).includes(endVertexKey) || this.getAdjList(endVertexKey).includes(startVertexKey);
    }
}