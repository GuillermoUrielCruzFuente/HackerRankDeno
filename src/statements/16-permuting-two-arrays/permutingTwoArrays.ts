export type PermutingParams = {
	k: number;
	a: number[];
	b: number[];
};

export type CanPermute = "YES" | "NO";

export const permutingTwoArrays = ({ a, b, k }: PermutingParams): CanPermute => {
	const { length } = a;
	let thereIsNoValidPermutation = false;

	const swapValues = (indexA: number, indexB: number) => {
		const temp = b[indexA];
		b[indexA] = b[indexB];
		b[indexB] = temp;
	};

	for (let i = 0; i < length; i++) {
		if (thereIsNoValidPermutation) break;
		let nearestValueIndex = Infinity;
		const aItem = a[i];

		for (let j = i; j < length; j++) {
			const bItem = b[j];
			const sum = aItem + bItem;

			if (sum === k) {
				if (j > i) swapValues(i, j);

				break;
			}

			const currentDifference = sum - k;
			const nearestValueDifference = nearestValueIndex === Infinity
				? Infinity
				: aItem + b[nearestValueIndex] - k;

			if (
				currentDifference > 0 &&
				currentDifference < nearestValueDifference &&
				sum >= k
			) nearestValueIndex = j;

			if (j === (b.length - 1)) {
				if (nearestValueIndex !== Infinity) {
					swapValues(i, nearestValueIndex);
				} else {
					thereIsNoValidPermutation = true;
				}
			}
		}
	}

	return thereIsNoValidPermutation ? "NO" : "YES";
};
