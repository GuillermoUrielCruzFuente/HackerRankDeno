export const flippingBits = (n: number): number => {
	const binary = convertNumberToBinary(n);

	let invertedBinary = "";
	for (let index = 0; index < binary.length; index++) {
		const letter = binary[index];
		letter === "1" ? invertedBinary += "0" : invertedBinary += "1";
	}

	return convertBinaryToNumber(invertedBinary);
};

export const convertNumberToBinary = (n: number, bits = 32): string => {
	let binary = "";

	while (n > 0) {
		n /= 2;
		binary = Number.isInteger(n) ? `0${binary}` : `1${binary}`;
		n = Math.floor(n);
	}

	const missingDigits = bits - binary.length;

	if (missingDigits === 0) return binary;

	let missingPart = "";
	for (let i = 0; i < missingDigits; i++) {
		missingPart += "0";
	}

	return missingPart + binary;
};
