import { isPalindrome } from '../dist/'

describe('isPalindrome', () => {
    test('should return true', () => {
        expect(isPalindrome('kodok')).toBeTruthy()
        expect(isPalindrome('idi')).toBeTruthy()
        expect(isPalindrome('ababa')).toBeTruthy()
    })

    test('should return false', () => {
        expect(isPalindrome('aldi')).toBeFalsy()
        expect(isPalindrome('abab')).toBeFalsy()
        expect(isPalindrome('beauty')).toBeFalsy()
    })
})
