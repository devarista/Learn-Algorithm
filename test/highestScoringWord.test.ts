import { high } from '../dist'

describe('Highest Scoring Word', () => {
    test('should return highest score', () => {
        expect(high('I like to eat pizza')).toEqual('pizza')
    })
})
