import { Queue } from '../dist'

describe('Queue Stack', () => {
    const queue = new Queue()
    test('should return the parameter', () => {
        expect(queue.enqueue('Hello')).toEqual('Hello')
    })
    test('should return first item from stack', () => {
        expect(queue.peek()).toEqual('Hello')
    })
    test('should return boolean', () => {
        expect(queue.isEmpty()).toBeFalsy()
    })
    test('should return first Item from stack', () => {
        expect(queue.dequeue()).toEqual('Hello')
    })
    test('should return number', () => {
        expect(queue.getLength()).toBeGreaterThanOrEqual(0)
    })
})
