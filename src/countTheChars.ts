/**
 * Only work in javascript
 */

// String.prototype.characterCount = function (charsToCount) {
//     if (!this) return undefined
//     if (!charsToCount) return undefined
//     if (charsToCount.length === 1) return this.split('').filter((x) => x === charsToCount).length
//     if (charsToCount.length >= 2) {
//         let result = []
//         for (const iterator of charsToCount) {
//             result.push(this.split('').filter((x) => x === iterator).length)
//         }
//         return result
//     }
// }

// Typescript but error
// declare global {
//     interface StringConstructor {
//         countTheChars(charsToCount: string): number | number[]
//     }
// }

// String.countTheChars = (charsToCount: string) => {
//     if (!this) return undefined
//     if (!charsToCount) return undefined
//     if (charsToCount.length === 1) return this.split('').filter((x:string) => x === charsToCount).length
//     if (charsToCount.length >= 2) {
//         let result = []
//         for (const iterator of charsToCount) {
//             result.push(this.split('').filter((x:string) => x === iterator).length)
//         }
//         return result
//     }
// }

// export {}
