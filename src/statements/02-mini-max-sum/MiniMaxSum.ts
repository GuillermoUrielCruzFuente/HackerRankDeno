export type MinMaxTuple = [number, number];
export type DataTuple = [number, number, number, number, number];

export const miniMaxSum = (array: DataTuple): MinMaxTuple => {
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
