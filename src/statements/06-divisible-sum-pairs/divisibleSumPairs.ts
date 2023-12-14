export type SumPairsInput = {
	numbers: number[];
	k: number;
};

export const divisibleSumPairs = ({ numbers, k }: SumPairsInput) => {
	return numbers[0] + k;
};
