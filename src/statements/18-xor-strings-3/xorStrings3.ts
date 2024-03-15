export type Params = { a: string; b: string };

export const xorStrings3 = ({ a, b }: Params) => {
	//initialize a new array with the same length and fill it with '0'
	const XOR: string[] = new Array(a.length).fill("0");

	//compare every bit in order to decide the output
	for (let i = 0; i < a.length; i++) {
		if (a[i] != b[i]) {
			XOR[i] = "1";
		}
	}

	return XOR.join("");
};
