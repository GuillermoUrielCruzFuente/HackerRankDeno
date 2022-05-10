/**
 * You will be given a list of 32 bit unsigned integers. Flip all the bits (1 -> 0 and 0 -> 1) and return the result as an unsigned integer.
 */

const flippingBits = (n: number): number => {
    let binary = convertNumberToBinary(n, 32)
    let invertedBinary = ''
    for (let index = 0; index < binary.length; index++) {
        const letter = binary[index]
        letter === '1' ? invertedBinary += '0' : invertedBinary += '1'
    }

    return convertBinaryToNumber(invertedBinary)
}

const convertNumberToBinary = (n: number, bits: number): string => {
    let binary = ''
    while (n > 0) {
        n /= 2
        Number.isInteger(n) ? binary = `0${binary}` : binary = `1${binary}`
        n = Math.floor(n)
    }
    let leftDigits = bits - binary.length
    if (leftDigits > 0) {
        let leftChain = ''
        for (let i = 0; i < leftDigits; i++) {
            leftChain += '0'
        }

        return leftChain + binary
    }

    return binary
}

const convertBinaryToNumber = (binary: string): number => {
    let value = 0
    for (let index = 0; index < binary.length; index++) {
        const digit = binary[index] === '0' ? 0 : 1
        value += Math.pow(2, binary.length - 1 - index) * digit
    }

    return value
}

console.clear()

console.log(
    flippingBits(2147483647),
    flippingBits(1),
    flippingBits(0),
)