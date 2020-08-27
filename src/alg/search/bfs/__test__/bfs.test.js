import { Graph } from '@prep/ds/Graph';
import { bfs } from '..';

describe('BFS', () => {
    test('should find the shortest path between two graph vertices', () => {
        const g = new Graph();

        const A = 'A', 
            B = 'B',
            C = 'C', 
            D = 'D', 
            E = 'E', 
            F = 'F', 
            G = 'G', 
            H = 'H',
            I = 'I';

        [A, B, C, D, E, F, G, H, I].forEach(v => g.addVertex(v));

        /*
        
            G - - - - - - - - - B
            |                 / |
            |               A   |
            |             / | \ |
            F - - - - - E   |  C
            |           \   |  |     
            |            \  |  |       
            H - - - - - -   D  
            
            I <-- isolated vertex
                                        
        */       

        g.addEdge(A, B)
            .addEdge(A, C)
            .addEdge(A, D)
            .addEdge(B, C)
            .addEdge(D, C)
            .addEdge(E, D)
            .addEdge(A, E)
            .addEdge(E, F)
            .addEdge(F, H)
            .addEdge(F, G)
            .addEdge(G, B)
            .addEdge(H, D);

        expect(bfs(g, A, B)).toEqual([A, B]);
        expect(bfs(g, H, B)).toEqual([H, F, G, B]);
        expect(bfs(g, I, D)).toEqual([]);
    });
});