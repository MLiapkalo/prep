import { LinkedList } from '../LinkedList';
import { ListNode } from '../ListNode';

describe('LinkedList', () => {
    let list; 

    beforeEach(() => {
        list = new LinkedList();
    });

    test('should be empty right after creation', () => {
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
    });

    test('should add nodes at the end', () => {
        list
        .append(new ListNode(1))
        .append(new ListNode(2))
        .append(new ListNode(3));

        expect(list.head.value).toBe(1);
        expect(list.tail.value).toBe(3);
    });

    test('should add nodes at the start', () => {
        list
        .prepend(new ListNode(1))
        .prepend(new ListNode(2))
        .prepend(new ListNode(3));

        expect(list.head.value).toBe(3);
        expect(list.tail.value).toBe(1);
    });

    test('should delete nodes at the end', () => {
        list
        .append(new ListNode(1))
        .append(new ListNode(2))
        .append(new ListNode(3));

        expect(list.tail.value).toBe(3);

        list.popRight();

        expect(list.head.value).toBe(1);
        expect(list.tail.value).toBe(2);
        expect(list.size).toBe(2);
    });

    test('should delete nodes at the start', () => {
        list
        .append(new ListNode(1))
        .append(new ListNode(2))
        .append(new ListNode(3));

        expect(list.head.value).toBe(1);

        list.popLeft();

        expect(list.head.value).toBe(2);
        expect(list.tail.value).toBe(3);
        expect(list.size).toBe(2);
    });

    test('should delete nodes at the start', () => {
        const callbackMock = jest.fn();

        list
        .append(new ListNode(1))
        .append(new ListNode(2))
        .prepend(new ListNode(3))
        .doTraversal(callbackMock);

        expect(callbackMock).toHaveBeenCalledTimes(3);
    });

    test('should return list size', () => {
        expect(list.size).toBe(0)

        list
        .append(new ListNode(1))
        .append(new ListNode(2))
        .prepend(new ListNode(3));

        expect(list.size).toBe(3);
    });

    test('should check whether value is in the list', () => {
        list
        .append(new ListNode(1))
        .append(new ListNode(2))
        .prepend(new ListNode(3));

        expect(list.contains(2)).toBeTruthy();
        expect(list.contains(11)).toBeFalsy();
    });
});