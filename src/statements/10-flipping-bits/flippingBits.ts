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

/**
 * @see {@link https://stackoverflow.com/a/24153275}
 */
export const createBinaryString = (nMask: number) => {
	// nMask must be between -2147483648 and 2147483647
	for (
		var nFlag = 0, nShifted = nMask, sMask = "";
		nFlag < 32;
		nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1
	);

	return sMask;
};

const convertBinaryToNumber = (binary: string): number => {
	let value = 0;
	for (let index = 0; index < binary.length; index++) {
		const digit = binary[index] === "0" ? 0 : 1;
		value += Math.pow(2, binary.length - 1 - index) * digit;
	}

	return value;
};
