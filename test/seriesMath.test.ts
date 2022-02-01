import { seriesMath } from '../dist'

describe('Math Series', () => {
    test('should return equal', () => {
        expect(seriesMath(10)).toEqual([1, '*', 3, 4, '*', 6, '*', 8, 9, '*'])
    })
})
