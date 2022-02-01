export const reversedSequence = (n: number): number[] => {
    let array: number[] = []
    for (let i = n; i > 0; i--) {
        array.push(i)
    }
    return array
}
