/**
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.
 */

const diagonalDifference = (matrix: Array<Array<number>>): number => {
    const primaryDiagonalIndices = getPrimaryDiagonalIndices(matrix[0].length)
    const secondaryDiagonalIndices = getSecondaryDiagonalIndices(matrix[0].length)

    let primarySum = 0
    let secondarySum = 0

    for (let i = 0; i < matrix[0].length; i++) {
        primarySum += matrix[primaryDiagonalIndices[i].row][primaryDiagonalIndices[i].column]
        secondarySum += matrix[secondaryDiagonalIndices[i].row][secondaryDiagonalIndices[i].column]
    }

    return Math.abs(primarySum - secondarySum)
}

type MatrixCoordinate = {
    row: number,
    column: number
}
/**
 * The left-to-right diagonal indices in a square matrix
 * @param squareMatrixSize 
 * @returns Array of primary diagonal indices in square matrix
 */
const getPrimaryDiagonalIndices = (squareMatrixSize: number): Array<MatrixCoordinate> => {
    let primaryDiagonal: Array<MatrixCoordinate> = []

    for (let i = 0; i < squareMatrixSize; i++) {
        primaryDiagonal.push({
            row: i,
            column: i
        })
    }

    return primaryDiagonal
}

/**
 * The right to left diagonal indices in a square matrix
 * @param squareMatrixSize 
 * @returns Array of secondary diagonal indices in square matrix
 */
const getSecondaryDiagonalIndices = (squareMatrixSize: number): Array<MatrixCoordinate> => {
    let primaryDiagonal: Array<MatrixCoordinate> = []

    for (let i = 0; i < squareMatrixSize; i++) {
        primaryDiagonal.push({
            row: i,
            column: squareMatrixSize - 1 - i
        })
    }

    return primaryDiagonal
}


const test = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]

console.clear()
console.log(diagonalDifference(test))
