/**
 * Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
 * Lily decides to share a contiguous segment of the bar selected such that:
 *  - The length of the segment matches Ron's birth month, and,
 *  - The sum of the integers on the squares is equal to his birth day.
 * Determine how many ways she can divide the chocolate
 * @param chocolateBar Array of numbers that shows the chocolate bar numbers in every square
 * @param birthDay Friend's birthday. The total sum of every square of chocolate segment must be equal to this number
 * @param birthMonth Friend's birth month. The leght of the chocolate segment must be equal to this number
 * @returns The number of posible slices that meet the conditions
 */
const getChocolateSlices = (chocolateBar: Array<number>, birthDay: number, birthMonth: number): number => {
    let numberOfPosibleSlices = 0

    for (let i = 0; i < chocolateBar.length; i++) {
        const sliceStep = i + birthMonth - 1
        const thereIsEnoughChocolate = sliceStep <= chocolateBar.length - 1

        if (thereIsEnoughChocolate) {
            let chocolateSquaresAccumulator = 0

            for (let j = i; j <= sliceStep; j++) {
                chocolateSquaresAccumulator += chocolateBar[j]
            }

            chocolateSquaresAccumulator === birthDay ? numberOfPosibleSlices++ : undefined
        } else {
            break
        }

    }
    return numberOfPosibleSlices
}

export default getChocolateSlices