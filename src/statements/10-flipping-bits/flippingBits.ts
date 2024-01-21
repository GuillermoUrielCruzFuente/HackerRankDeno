export const flippingBits = (n: number): number => {
	const binary = convertNumberToBinary(n, 32);

	let invertedBinary = "";
	for (let index = 0; index < binary.length; index++) {
		const letter = binary[index];
		letter === "1" ? invertedBinary += "0" : invertedBinary += "1";
	}

	return convertBinaryToNumber(invertedBinary);
};
