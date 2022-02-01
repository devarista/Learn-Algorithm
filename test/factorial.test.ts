import { factorial, factorialRecursive, factorialTailRecursive } from '../dist'

describe('Factorial', () => {
    test('should be equal', () => {
        expect(factorial(0)).toEqual(1)
        expect(factorial(1)).toEqual(1)
        expect(factorial(2)).toEqual(2)
        expect(factorial(3)).toEqual(6)
        expect(factorial(4)).toEqual(24)
        expect(factorial(5)).toEqual(120)
    })
})

describe('Factorial Recursive', () => {
    test('should be equal', () => {
        expect(factorialRecursive(0)).toEqual(1)
        expect(factorialRecursive(1)).toEqual(1)
        expect(factorialRecursive(2)).toEqual(2)
        expect(factorialRecursive(3)).toEqual(6)
        expect(factorialRecursive(4)).toEqual(24)
        expect(factorialRecursive(5)).toEqual(120)
    })
})

describe('Factorial Tail Recursive', () => {
    test('should be equal', () => {
        expect(factorialTailRecursive(1, 0)).toEqual(1)
        expect(factorialTailRecursive(1, 1)).toEqual(1)
        expect(factorialTailRecursive(1, 2)).toEqual(2)
        expect(factorialTailRecursive(1, 3)).toEqual(6)
        expect(factorialTailRecursive(1, 4)).toEqual(24)
        expect(factorialTailRecursive(1, 5)).toEqual(120)
    })
})
