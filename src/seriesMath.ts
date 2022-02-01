export const seriesMath = (length: number): number[] => {
    let output: any[] = new Array<any>(length)
    // let output: any[] = []
    let steps = {
        one: 1,
        two: 4,
    }
    for (let i = 0; i < length; i++) {
        if (steps.one === i) {
            // output.push('*')
            output[i] = '*'
            steps.one = steps.one + 5
        } else if (steps.two === i) {
            // output.push('*')
            output[i] = '*'
            steps.two = steps.two + 5
        } else {
            // output.push(i + 1)
            output[i] = i + 1
        }
    }
    return output
}
