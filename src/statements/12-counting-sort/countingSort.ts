/**
 * @param arr array with random values
 * @returns array of frecuencies
 */
export const countingSort = (arr: number[]): number[] => {
	const frequencies = new Array<number>(100);
	frequencies.fill(0);

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 100) frequencies[arr[i]]++;
	}

	return frequencies;
};
