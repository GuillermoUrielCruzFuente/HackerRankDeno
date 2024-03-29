export const zigZagSequence = (array: number[]): number[] => {
	array.sort((a, b) => a - b);

	const swap = (from: number, to: number) => {
		[array[from], array[to]] = [array[to], array[from]];
	};

	const midIndex = Math.trunc((array.length + 1) / 2) - 1;
	const lastIndex = array.length - 1;

	swap(midIndex, lastIndex);

	let aIndex = midIndex + 1;
	let bIndex = lastIndex - 1;

	while (aIndex <= bIndex) {
		swap(aIndex, bIndex);

		aIndex = aIndex + 1;
		bIndex = bIndex - 1;
	}

	return array;
};
