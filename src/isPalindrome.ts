/**
 * Palindrome 1st solution
 * @param value :string
 * @returns boolean
 */
// export const isPalindrome = (value: string): boolean => {
//     let temp: string = ''

//     for (let i = value.length - 1; i >= 0; i--) {
//         temp += value[i]
//     }

//     if (temp !== value) return false
//     return true
// }

/**
 * Palindrome with optimization
 * @param value :string
 * @returns boolean
 */
// export const isPalindrome = (value: string): boolean => {
//     for (let i = 0; i < value.length / 2; i++) {
//         if (value[i] !== value[value.length - 1 - i]) {
//             return false
//         }
//     }
//     return true
// }

/**
 * Palindrome Recursive
 * @param value : string
 * @param index : number
 * @returns boolean
 */
const isPalindromeRecursive = (value: string, index: number): boolean => {
    if (index < value.length / 2) {
        if (value[index] !== value[value.length - 1 - index]) {
            return false
        }
        return isPalindromeRecursive(value, index + 1)
    }
    return true
}

export const isPalindrome = (value: string) => {
    return isPalindromeRecursive(value, 0)
}
