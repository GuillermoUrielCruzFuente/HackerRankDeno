export type Bit = "0" | "1"

const XORStrings = (A: Array<Bit>, B: Array<Bit>): Array<Bit> => {
	//initialize a new array with the same length and fill it with '0'
	const XOR: Array<Bit> = new Array(A.length).fill("0")

	//compare every bit in order to decide the output
	for (let i = 0; i < A.length; i++) {
		const bitA = A[i]
		const bitB = B[i]

		if (bitA != bitB) {
			XOR[i] = "1"
		}
	}
	return XOR
}

export default XORStrings
