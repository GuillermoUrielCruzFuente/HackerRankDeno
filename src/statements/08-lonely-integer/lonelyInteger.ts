type ConcurrencyTableItem = {
	[key: number]: number;
};

const repetitionsInNumericArray = (numbers: number[]): ConcurrencyTableItem => {
	const numberReps: ConcurrencyTableItem = {};

	numbers.forEach((n: number) => {
		n in numberReps ? numberReps[n]++ : numberReps[n] = 1;
	});

	return numberReps;
};

export const lonelyInteger = (integers: number[]): number => {
	const concurrencyTable = repetitionsInNumericArray(integers);

	for (const int of integers) {
		if (concurrencyTable[int] === 1) {
			return int;
		}
	}

	throw new Error("There is no unique element in this array");
};
