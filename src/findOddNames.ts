export const findOddNames = (
    lists: {
        firstName: string
        lastName: string
        country: string
        continent: string
        age: number
        language: string
    }[]
) => {
    return lists.filter((d) => d.firstName.split('').reduce((r, e) => r + e.charCodeAt(0), 0) % 2 !== 0)
}
