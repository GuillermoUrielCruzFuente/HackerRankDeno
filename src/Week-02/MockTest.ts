/**
 * Given a 2nx2n matrix, reverse the rows or columns
 * the needed times to maximize the sum of 
 * nxn matrix
 * @param matrix matrix 2nx2n to optimize
 * @returns the total sum for elements in submatrix nxn
 */

const flippingMatrix = (matrix: Array<Array<number>>): number => {
    const n = matrix[0].length / 2
    // console.log(matrix)
    let lastValue = 0
    let currenValue = 0
    let accumulator = 0

    do {
        for (let i = 0; i < matrix[0].length; i++) {
            const RowArray = matrix[i]

            if (needReverse(RowArray)) {
                matrix[i] = RowArray.reverse()
            }
        }

        for (let i = 0; i < matrix[0].length; i++) {

            let columnArray: Array<number> = []
            for (let j = 0; j < matrix[0].length; j++) {
                columnArray.push(matrix[j][i])
            }

            if (needReverse(columnArray)) {
                columnArray.reverse()

                for (let j = 0; j < matrix[0].length; j++) {
                    matrix[j][i] = columnArray[j]
                }
            }

            console.log(`matrix column ${i}:`)
            console.log(matrix)
        }

        accumulator = 0
        for (let j = 0; j < n; j++) {
            for (let i = 0; i < n; i++) {
                accumulator += matrix[j][i]
            }
        }

        lastValue = currenValue
        currenValue = accumulator
    } while (lastValue < currenValue);

    console.log('--------------------------------------')
    console.log(matrix)

    return accumulator
}

const needReverse = (array: Array<number>): boolean => {
    let firstHalfSum = array.slice(0, array.length / 2).reduce((a, b) => a + b)
    let secondHalfSum = array.slice(array.length / 2, array.length).reduce((a, b) => a + b)
    // secondHalfSum >= firstHalfSum ? console.log(`${array} ---- ${firstHalfSum} ---- ${secondHalfSum}`) : undefined

    return secondHalfSum >= firstHalfSum
}

const getMaxIndex = (array: Array<number>): number => {
    const max = Math.max(...array)

    return array.indexOf(max)
}



const test = [
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108]
]
// 414
console.log(
    flippingMatrix(test)
    // getMaxIndex([22, 45, 892, 3001])
    // 3 >= 3
)