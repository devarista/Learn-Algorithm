export const high = (value: string): string => {
    // const alphabetMap: any = {}
    // const words = value.split(' ')

    // for (let i = 'a'.charCodeAt(0), j = 1; i <= 'z'.charCodeAt(0); i++, j++) {
    //     alphabetMap[i] = j
    // }

    // let highestScoringWord: { word: string; score: number } = { word: '', score: 0 }
    // words.forEach((word) => {
    //     const chars = word.split('')
    //     const sumOfChars = chars.reduce((count, char) => count + alphabetMap[char.charCodeAt(0)], 0)

    //     if (sumOfChars > highestScoringWord.score) {
    //         highestScoringWord = { word: word, score: sumOfChars }
    //     }
    // })
    // return highestScoringWord.word

    let as = value.split(' ').map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0))
    return value.split(' ')[as.indexOf(Math.max(...as))]
}
