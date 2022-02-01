export const validParentheses = (input: string) => {
    const obj: object = {
        '(': ')',
        '{': '}',
        '[': ']',
    }

    const stack = []

    // for (const paran of input) {
    //     if (obj.hasOwnProperty(paran)) {
    //         stack.push(paran)
    //     } else {
    //         const closeParan = stack.pop()
    //         if (paran !== obj[closeParan]) {
    //             return false
    //         }
    //     }
    // }

    return stack.length === 0
}
