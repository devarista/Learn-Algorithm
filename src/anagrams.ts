export const anagrams = (word: string, words: string[]): string[] => {
    // let result: string[] = []
    // const temp = word.split(' ')
    // const mapper: any = {}
    // for (let i = 'a'.charCodeAt(0), j = 1; i <= 'z'.charCodeAt(0); i++, j++) {
    //     mapper[i] = j
    // }

    // let helper: { score: number } = { score: 0 }
    // temp.forEach((word) => {
    //     const chars = word.split('')
    //     const sumOfChars = chars.reduce((count, char) => count + mapper[char.charCodeAt(0)], 0)
    //     helper = { score: sumOfChars }
    // })

    // words.forEach((word) => {
    //     const chars = word.split('')
    //     const sumOfChars = chars.reduce((count, char) => count + mapper[char.charCodeAt(0)], 0)
    //     if (helper.score === sumOfChars) {
    //         result.push(word)
    //     }
    // })
    // return result

    return words.filter((x: string) => {
        return x.split('').sort().join('') === word.split('').sort().join('')
    })
}
