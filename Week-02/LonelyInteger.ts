/**
 * Given an array of integers, where all elements but one occur twice, find the unique element.
 */
const lonelyInteger = (listOfInteger: Array<number>): number => {
    const concurrencyTable = repetitionsInNumericArray(listOfInteger)

    for (let i = 0; i < listOfInteger.length; i++) {
        const integer = listOfInteger[i]

        if (concurrencyTable[integer] === 1) {
            return integer
        }
    }

    throw new Error('the is no a unique alement in this array')
}

type ConcurrencyTableItem = {
    [key: number]: number
}

const repetitionsInNumericArray = (wordArray: Array<number>): ConcurrencyTableItem => {

    let dictionary: ConcurrencyTableItem = {}

    wordArray.forEach((n: number) => {
        n in dictionary ? dictionary[n]++ : dictionary[n] = 1
    })

    return dictionary
}




const test = [
    0,
    0,
    1,
    2,
    1
]
console.log(lonelyInteger(test))