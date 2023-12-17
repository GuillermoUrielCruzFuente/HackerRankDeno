export type SumPairsInput = {
	numbers: number[];
	k: number;
};

export const divisibleSumPairs = ({ numbers, k }: SumPairsInput) => {
	let counter = 0;

	for (let i = 0; i < numbers.length; i++) {
		for (let j = 0; j < numbers.length; j++) {
			if (i < j && (((numbers[i] + numbers[j]) % k) === 0)) {
				counter++;
			}
		}
	}

	return counter;
};
