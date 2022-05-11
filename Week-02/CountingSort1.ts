/**
 * Comparison Sorting
 * Quicksort usually has a running time of nlog(n), but is there an algorithm that can sort even faster?
 * In general, this is not possible. Most sorting algorithms are comparison sorts,
 * i.e. they sort a list just by comparing the elements to one another. 
 * A comparison sort algorithm cannot beat nlog(n) (worst-case) running time,
 * since nlog(n) represents the minimum number of comparisons needed to know where to place each element.
 * 
 * 
 * Alternative Sorting
 * Another sorting method, the counting sort, does not require comparison.
 * Instead, you create an integer array whose index range covers the entire
 * range of values in your array to sort. Each time a value occurs in the original array,
 * you increment the counter at that index. At the end, run through your counting array,
 * printing the value of each non-zero valued index that number of times.
 */

/**
 * 
 * @param toSort array with random values
 * @returns array of frecuencies
 */
const countingSort = (toSort: Array<number>): Array<number> => {
    let zeros = new Array<number>(100)
    zeros.fill(0)

    for (let index = 0; index < toSort.length; index++) {
        const element = toSort[index];
        element >= 100 ? undefined : zeros[element]++
    }

    return zeros
}

let rawTest = '63 25 73 1 98 73 56 84 86 57 16 83 8 25 81 56 9 53 98 67 99 12 83 89 80 91 39 86 76 85 74 39 25 90 59 10 94 32 44 3 89 30 27 79 46 96 27 32 18 21 92 69 81 40 40 34 68 78 24 87 42 69 23 41 78 22 6 90 99 89 50 30 20 1 43 3 70 95 33 46 44 9 69 48 33 60 65 16 82 67 61 32 21 79 75 75 13 87 70 33'
let arrayRawTest = rawTest.split(' ')
let test: Array<number> = []
arrayRawTest.forEach((item: string, i: number) => {
    let rawTransform = parseInt(item)
    rawTransform ? test.push(rawTransform) : console.log(`item #${i} is not a number`)
})

console.log(countingSort(test))

