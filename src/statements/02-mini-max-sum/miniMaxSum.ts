export type MinMaxTuple = [number, number];
export type DataTuple = [number, number, number, number, number];

export const miniMaxSum = (array: number[]): MinMaxTuple => {
	// ascendent -> from min to max
	const sortedArray = array.sort((a, b) => a - b);

	const min = sortedArray.shift()!;
	const max = sortedArray.pop()!;
	const restSum = sortedArray.reduce((prev, curr) => prev + curr, 0);

	return [restSum + min, restSum + max];
};

export const miniMaxSum2 = (array: number[]): MinMaxTuple => {
	// ascendent -> from min to max
	const sortedArr = array.sort((a, b) => a - b);

	const min = sortedArr
		.filter((_, i) => i < array.length - 1)
		.reduce((prev, curr) => prev + curr);

	const max = sortedArr
		.filter((_, i) => i !== 0)
		.reduce((prev, curr) => prev + curr);

	return [min, max];
};
