export const evalLikes = (value: string[]): boolean => {
    return value.filter((v) => v.toLowerCase() === 'like').length / value.length > 0.05
}
