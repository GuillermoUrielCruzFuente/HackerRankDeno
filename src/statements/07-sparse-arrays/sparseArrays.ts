type ConcurrencyTableItem = {
	[key: string]: number;
};

const repetitionsInStringArray = (wordArray: string[]): ConcurrencyTableItem => {
	const dictionary: ConcurrencyTableItem = {};

	wordArray.forEach((word: string) => {
		word in dictionary ? dictionary[word]++ : dictionary[word] = 1;
	});

	return dictionary;
};

export type SparseArraysArgs = {
	strings: string[];
	queries: string[];
};

export const sparseArrays = ({ strings, queries }: SparseArraysArgs) => {
	const repetitions = repetitionsInStringArray(strings);
	return queries.map((query) => repetitions[query] ?? 0);
};
