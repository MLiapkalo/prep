import { HashTable } from '..';

describe('HashTable', () => {
    let table;
    const planets = ['Mars', 'Venus', 'Earth', 'Mercury', 'Jupiter', 'Uranus', 'Neptune', 'Saturn']
        .map(name => ({
            key: name[0],
            value: name
        }));

    beforeEach(() => {
        table = new HashTable();
    });

    test('should insert keys into the table', () => {
        planets.forEach(({ key, value }) => table.insert(key, value));
        planets.forEach(({ key }) => expect(table.has(key)).toBeTruthy());
    });

    test('should return list of inserted keys/values', () => {
        table.insert('o', 'ocean');
        table.insert('s', 'star');
        table.insert('m', 'moon');

        expect(table.keys).toEqual(['o', 's', 'm']);
        expect(table.values).toContainEqual('ocean');
        expect(table.values).toContainEqual('star');
        expect(table.values).toContainEqual('moon');
    });

    test('should check if table has specified key', () => {
        table.insert('M', 'Mars');
        expect(table.has('M')).toBeTruthy();
        expect(table.has('P')).toBeFalsy();
    });

    test('should return value by key', () => {
        table.insert('M', 'Mars');
        expect(table.get('M')).toBe('Mars');
    });

    test('should round size to the closest power of 2(lower one)', () => {
        const table1 = new HashTable(6);
        const table2 = new HashTable(9);

        expect(table1.size).toBe(4);
        expect(table2.size).toBe(8);
    });

    test('should update existing key value', () => {
        table.insert('o', 'ocean');

        expect(table.get('o')).toBe('ocean');
        table.insert('o', 'octopus');

        expect(table.get('o')).toBe('octopus');
    });
});