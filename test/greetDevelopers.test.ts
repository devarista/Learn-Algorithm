import { greetDevelopers } from '../dist'

describe('Greeting', () => {
    test('should add greeting object', () => {
        var list: {
            firstName: string
            lastName: string
            country: string
            continent: string
            age: number
            language: string
        }[] = [
            { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
            { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
            { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' },
        ]

        expect(greetDevelopers(list)).toEqual([
            {
                firstName: 'Sofia',
                lastName: 'I.',
                country: 'Argentina',
                continent: 'Americas',
                age: 35,
                language: 'Java',
                greeting: 'Hi Sofia, what do you like the most about Java?',
            },
            {
                firstName: 'Lukas',
                lastName: 'X.',
                country: 'Croatia',
                continent: 'Europe',
                age: 35,
                language: 'Python',
                greeting: 'Hi Lukas, what do you like the most about Python?',
            },
            {
                firstName: 'Madison',
                lastName: 'U.',
                country: 'United States',
                continent: 'Americas',
                age: 32,
                language: 'Ruby',
                greeting: 'Hi Madison, what do you like the most about Ruby?',
            },
        ])
    })
})
