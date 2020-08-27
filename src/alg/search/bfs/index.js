import { Queue } from '../../../ds/Queue';
import { Graph } from '../../../ds/Graph';
/**
 * @param {Graph} g - graph to perform search on 
 * @param {*} s - start vertex 
 * @param {*} e - end vertex
 * @returns {Array} - shortest path from s to e
 */
export function bfs(g, s, e) {
    if (!g.hasVertex(s) || !g.hasVertex(e)) return;

    // serves for seen vertices tracking
    const seen = new Set();
    // serves for memorizing each vertex precedessor vertex
    const prevs = Array(g.vertices.length).fill(null);
    // serves for graph traversal
    const q = new Queue();

    // enqueue starting vertex and mark it as seen
    q.enqueue(s);
    seen.add(s);

    while (!q.isEmpty) {
        const curr = q.dequeue();
        const adjacent = g.adjacentVertices(curr);

        if (!seen.has(curr)) {
            seen.add(curr);
        }

        adjacent.forEach(v => {
            if (!seen.has(v)) {
                q.enqueue(v);
                seen.add(v);
                prevs[g.vertexIndex(v)] = g.vertexIndex(curr);
            }
        });
    }

    // the path from s to e which is gonna be returned from funciton
    const path = [];

    for (let at = g.vertexIndex(e); at !== null; at = prevs[at]) {
        path.push(at);
    }

    // reverse the path so it starts with s and ends with e
    path.reverse();

    // if there is a path between s and e - return it, otherwise - return "empty" path
    return path[0] === g.vertexIndex(s) ? path.map(i => g.findVertexByIndex(i)) : [];
}