type CanPermute = 'YES' | 'NO'

const PermuteArray = (
	A: Array<number>,
	B: Array<number>,
	k: number
): CanPermute => {
	const C: Array<number> = []

	for (let i = 0; i < A.length; i++) {
		const a = A[i]

		for (let j = 0; j < B.length; j++) {
			const b = B[j]
			const isArrayEnd = !(j < B.length - 1)
			if (a + b >= k) {
				C.push(b)
				B.splice(j, 1)
				break
			} else if (isArrayEnd) {
				return 'NO'
			}
		}
	}

	return 'YES'
}

export default PermuteArray
