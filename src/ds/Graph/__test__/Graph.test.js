import { Graph } from '..';

describe('Graph', () => {
    let graph;
    let dirGraph;

    const v1 = 'Bob', v2 = 'Paul', v3 = 'Alice';

    beforeEach(() => {
        graph = new Graph();
        dirGraph = new Graph(true);
    });

    test('should be empty after creation', () => {
        expect(graph).toBeTruthy();
    });

    test('should add vertices to graph', () => {

        graph.addVertex(v1)
            .addVertex(v2)
            .addVertex(v2);
        
        expect(graph.hasVertex(v1)).toBeTruthy();
        expect(graph.hasVertex(v2)).toBeTruthy();
    });

    test('should add/remove edges to/from graph: undirected', () => {
        expect(graph.hasVertex(v3)).toBeFalsy();
        expect(graph.hasEdge(v1, v2)).toBeFalsy();
        expect(graph.hasEdge(v1, v3)).toBeFalsy();
        expect(graph.hasEdge(v2, v3)).toBeFalsy();

        graph.addEdge(v1, v2)
            .addEdge(v3, v1)
            .addEdge(v2, v3);

        expect(graph.hasVertex(v3)).toBeTruthy();

        expect(graph.hasEdge(v1, v2)).toBeTruthy();
        expect(graph.hasEdge(v2, v1)).toBeTruthy();

        expect(graph.hasEdge(v1, v3)).toBeTruthy();
        expect(graph.hasEdge(v3, v1)).toBeTruthy();

        expect(graph.hasEdge(v2, v3)).toBeTruthy();
        expect(graph.hasEdge(v3, v2)).toBeTruthy();

        graph.removeEdge(v3, v2);
        // test unexisting graph's edge case
        graph.removeEdge(v3, v2);

        expect(graph.hasEdge(v2, v3)).toBeFalsy();
        expect(graph.hasEdge(v3, v2)).toBeFalsy();
    });

    test('should add/remove edges to/from graph: directed', () => {
        expect(dirGraph.hasVertex(v3)).toBeFalsy();
        expect(dirGraph.hasEdge(v1, v2)).toBeFalsy();
        expect(dirGraph.hasEdge(v3, v1)).toBeFalsy();
        expect(dirGraph.hasEdge(v2, v3)).toBeFalsy();

        dirGraph.addEdge(v1, v2)
            .addEdge(v3, v1)
            .addEdge(v2, v3);
        
        expect(dirGraph.hasVertex(v3)).toBeTruthy();

        expect(dirGraph.hasEdge(v1, v2)).toBeTruthy();
        expect(dirGraph.hasEdge(v2, v1)).toBeFalsy();

        expect(dirGraph.hasEdge(v3, v1)).toBeTruthy();
        expect(dirGraph.hasEdge(v1, v3)).toBeFalsy();

        expect(dirGraph.hasEdge(v2, v3)).toBeTruthy();
        expect(dirGraph.hasEdge(v3, v2)).toBeFalsy();

        dirGraph.removeEdge(v2, v3);

        expect(dirGraph.hasEdge(v2, v3)).toBeFalsy();
    });

    test('should return adjacent vertices list for provided vertex key: undirected', () => {
        graph.addEdge(v1, v2).addVertex(v3);

        expect(graph.adjacentVertices(v1)).toEqual([v2]);
        expect(graph.adjacentVertices(v2)).toEqual([v1]);
        expect(graph.adjacentVertices(v3)).toEqual([]);
    });

    test('should return adjacent vertices list for provided vertex key: directed', () => {
        dirGraph.addEdge(v1, v2);

        expect(dirGraph.adjacentVertices(v1)).toEqual([v2]);
        expect(dirGraph.adjacentVertices(v2)).toEqual([]);
    });

    test('should return full vertices list', () => {
        dirGraph.addEdge(v1, v2).addEdge(v2, v3);

        graph.addEdge(v1, v2).addEdge(v2, v3);

        const expectedVertices = [v1, v2, v3];
        
        expect(graph.vertices).toEqual(expect.arrayContaining(expectedVertices));
        expect(dirGraph.vertices).toEqual(expect.arrayContaining(expectedVertices));
    });
});