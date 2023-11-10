/**
 * positive, negative, zero
 */
export type RatioFormattedTuple = [string, string, string];

export const plusMinus = (array: number[]): RatioFormattedTuple => {
	const { length } = array;
	const zero = "0.000000";

	if (length === 0) return [zero, zero, zero];

	const ratio: [number, number, number] = [0, 0, 0];

	array.forEach((value) => {
		if (value > 0) ratio[0]++;
		else if (value < 0) ratio[1]++;
		else if (value === 0) ratio[2]++;
	});

	const finalRatio = ratio.map((rate) => (rate / length).toFixed(6));

	return finalRatio as RatioFormattedTuple;
};
