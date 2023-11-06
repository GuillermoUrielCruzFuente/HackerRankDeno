type MinMaxTuple = [number, number];

export const miniMaxSum = (arr: number[]): MinMaxTuple => {
	// ascendent -> from min to max
	const sortedArr = arr.sort((a, b) => a - b);

	const min = sortedArr
		.filter((_, i) => i < arr.length - 1)
		.reduce((prev, curr) => prev + curr);

	const max = sortedArr
		.filter((_, i) => i !== 0)
		.reduce((prev, curr) => prev + curr);

	return [min, max];
};
