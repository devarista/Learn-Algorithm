import { DataSet } from '../dist'

describe('Dataset', () => {
    test('add', () => {
        const dataSet = new DataSet()

        expect(dataSet.add('Eddy')).toBeTruthy()
        expect(dataSet.add('Eddy')).toBeFalsy()
        expect(dataSet.add('John')).toBeTruthy()
        expect(dataSet.add('John')).toBeFalsy()
    })

    test('contains', () => {
        const dataSet = new DataSet()
        dataSet.add('Eddy')
        dataSet.add('John')

        expect(dataSet.contains('Eddy')).toBeTruthy()
        expect(dataSet.contains('John')).toBeTruthy()
        expect(dataSet.contains('Doe')).toBeFalsy()
    })

    test('length', () => {
        const dataSet = new DataSet()

        expect(dataSet.length()).toEqual(0)

        dataSet.add('Eddy')
        expect(dataSet.length()).toEqual(1)

        dataSet.add('Eddy')
        expect(dataSet.length()).toEqual(1)

        dataSet.add('John')
        expect(dataSet.length()).toEqual(2)
    })

    test('remove', () => {
        const dataSet = new DataSet()

        dataSet.add('John')
        dataSet.add('Doe')
        dataSet.add('Eddy')
        dataSet.add('Denny')
        dataSet.add('George')

        expect(dataSet.length()).toEqual(5)
        dataSet.remove('Doe')
        expect(dataSet.length()).toEqual(4)

        expect(dataSet.contains('John')).toBeTruthy()
        expect(dataSet.contains('Eddy')).toBeTruthy()
        expect(dataSet.contains('Denny')).toBeTruthy()
        expect(dataSet.contains('George')).toBeTruthy()
        expect(dataSet.contains('Doe')).toBeFalsy()
    })

    test('Test Growth', () => {
        const dataSet = new DataSet()
        for (let i = 0; i < 100; i++) {
            dataSet.add(`item - ${i}`)
        }
        expect(dataSet.length()).toEqual(100)
    })
})
