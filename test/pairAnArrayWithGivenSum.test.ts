import { pairInAnArrayWithGivenSum } from '../dist'

test('value should be same with target', () => {
    expect(pairInAnArrayWithGivenSum([2, 3, 5, 7, 4, 8, 5, 3, 2, 8, 9, 6, 5, 1], 5)).toEqual([0, 1])
})
