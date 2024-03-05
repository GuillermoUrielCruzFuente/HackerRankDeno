export type PermutingParams = {
	k: number;
	a: number[];
	b: number[];
};

export type CanPermute = "YES" | "NO";

export const permutingTwoArrays = ({ k, a, b }: PermutingParams): CanPermute => {
	return "NO";
};
