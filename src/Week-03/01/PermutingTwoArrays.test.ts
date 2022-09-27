import PermuteArray from './PermutingTwoArrays.ts'

type TestCase = {
	A: Array<number>
	B: Array<number>
	k: number
}

const testCases: Array<TestCase> = [
	{
		A: [2, 1, 3],
		B: [7, 8, 9],
		k: 10
	},
	{
		A: [2, 1, 3, 5, 8],
		B: [5, 0, 9, 8, 2],
		k: 10
	},
	{
		A: [0, 1, 2, 5, 1, 3],
		B: [2, 1, 0, 0, 0, 1],
		k: 2
	}
]

testCases.forEach((test: TestCase) => {
	console.log(PermuteArray(test.A, test.B, test.k))
})
