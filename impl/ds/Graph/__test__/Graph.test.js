import { Graph } from '../Graph';
import { Vertex } from '../Vertex';

describe('Graph: undirected', () => {
    let graph;

    beforeEach(() => {
        graph = new Graph();
    });

    test('should add vertex to the graph', () => {
        graph
            .addVertex(new Vertex(0, { name: 'John', age: 21 }))
            .addVertex(new Vertex(1, { name: 'Silvia', age: 19 }));

        expect(graph.hasVertex(0)).toBeTruthy();
        expect(graph.hasVertex(1)).toBeTruthy();
        expect(graph.hasVertex('fail')).toBeFalsy()
    });

    test('should add edge', () => {
        const u = new Vertex(0, { name: 'John', age: 21 });
        const v = new Vertex(1, { name: 'Silvia', age: 19 });

        graph
            .addVertex(u)
            .addVertex(v)
            .addEdge(u.key, v.key);

        expect(graph.hasEdge(u.key, v.key)).toBeTruthy();
        expect(graph.hasEdge(v.key, u.key)).toBeTruthy();
    });

    test('should remove edge', () => {
        const u = new Vertex(0, 0);
        const v = new Vertex(3, 3);

        graph
            .addVertex(u)
            .addVertex(v)
            .addEdge(u.key, v.key)

        expect(graph.hasEdge(u.key, v.key)).toBeTruthy();
        expect(graph.hasEdge(v.key, u.key)).toBeTruthy();

        graph.removeEdge(u.key, v.key)

        expect(graph.hasEdge(v.key, u.key)).toBeFalsy();
        expect(graph.hasEdge(u.key, v.key)).toBeFalsy();
    });
});

describe('Graph: directed', () => {
    let graph;

    beforeEach(() => {
        graph = new Graph(true);
    });

    test('should add edge', () => {
        const u = new Vertex(0, 0);
        const v = new Vertex(1, 1);

        graph.addVertex(u).addVertex(v).addEdge(u.key, v.key);

        expect(graph.hasEdge(u.key, v.key)).toBeTruthy();
        expect(graph.hasEdge(v.key, u.key)).toBeFalsy();
    });
});