/**
 * An array with the numbers of times she broke her records.
 *
 * Index 0 is for breaking most points records,
 * and index 1 is for breaking least points records.
 */
export type MinMaxRecordTuple = [number, number];

export const breakingTheRecords = (scores: number[]): MinMaxRecordTuple => {
	let max = 0;
	let min = 0;
	let currentMin = scores[0];
	let currentMax = scores[0];

	for (const currentScore of scores) {
		if (currentScore < currentMin) {
			currentMin = currentScore;
			min++;
		}

		if (currentScore > currentMax) {
			currentMax = currentScore;
			max++;
		}
	}

	return [max, min];
};
