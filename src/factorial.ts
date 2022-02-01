export const factorialTailRecursive = (total: number = 1, value: number): number => {
    if (value <= 0) return total
    // If only even number
    // if (value % 2 !== 0) {
    //     return factorialTailRecursive(total, value - 1)
    // }
    return factorialTailRecursive(total * value, value - 1)
}

export const factorialRecursive = (value: number): number => {
    if (value <= 0) return 1
    return value * factorialRecursive(value - 1)
}

export const factorial = (value: number): number => {
    if (value <= 0) return 1
    let result: number = 1
    for (let i = value; i >= 1; i--) {
        result *= i
    }
    return result
}
