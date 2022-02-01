import { evalLikes } from '../dist'

describe('Eval Likes', () => {
    test('should return true', () => {
        expect(evalLikes(['today', 'was', 'so', 'like', 'awesome'])).toBeTruthy()
    })
    test('should return false', () => {
        expect(evalLikes(['yesterday', 'was', 'even', 'ummm', 'better'])).toBeFalsy()
        expect(evalLikes(['likely', 'story'])).toBeFalsy()
    })
})
