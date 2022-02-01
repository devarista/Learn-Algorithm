import { anagrams } from '../dist'

describe('Anagrams', () => {
    test('should return anagrams', () => {
        expect(anagrams('abba', ['abab', 'baab', 'aabb', 'bbaa', 'absd'])).toEqual(['abab', 'baab', 'aabb', 'bbaa'])
    })
})
