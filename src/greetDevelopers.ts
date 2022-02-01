/**
 * You will be given an array of objects (associative arrays in PHP, tables in COBOL)
 * representing data about developers who have signed up to attend the next coding meetup that you are organising.
 * Your task is to return an array where each object will have a new property 'greeting' with the following string value:
 * Hi < firstName here >, what do you like the most about < language here >?
 */

export const greetDevelopers = (list: any): {}[] => {
    return list.map((person: any) => ({ ...person, greeting: `Hi ${person.firstName}, what do you like the most about ${person.language}?` }))
}
