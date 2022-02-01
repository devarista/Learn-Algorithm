import { reversedSequence } from '../dist'

describe('Reversed Sequence', () => {
    test('should return array from higher to lower numebr', () => {
        expect(reversedSequence(5)).toEqual([5, 4, 3, 2, 1])
    })
})
