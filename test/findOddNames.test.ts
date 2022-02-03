import { findOddNames } from '../dist'

describe('Find Odd Names', () => {
    const lists: {
        firstName: string
        lastName: string
        country: string
        continent: string
        age: number
        language: string
    }[] = [
        { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
        { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' },
    ]

    test('should return second index', () => {
        expect(findOddNames(lists)).toEqual([{ firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }])
    })
})
