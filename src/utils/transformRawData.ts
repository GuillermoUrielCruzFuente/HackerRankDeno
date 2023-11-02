type JSONTestCaseData<T> = {
	input: string;
	output: T;
};

type TestDataReturn<T, J> = {
	inputs: T[][];
	expectedResults: J[];
};

export const typedParser = <SpaceSeparatedType, ExpectedType>(
	{ data }: { data: JSONTestCaseData<ExpectedType>[] },
): TestDataReturn<SpaceSeparatedType, ExpectedType> => {
	const inputs: SpaceSeparatedType[][] = [];
	const expectedResults: ExpectedType[] = [];

	data.forEach((testCase) => {
		const input = parseRawData<SpaceSeparatedType>(testCase.input);
		inputs.push(input);

		expectedResults.push(testCase.output as ExpectedType);
	});

	return { inputs, expectedResults };
};

/**
 * Parse the rawData that provides HackerRank platform, a string with
 * all the values separated with spaces
 *
 * @param rawData string sequence that contains all the `T` type
 * values separated by spaces
 *
 * @returns an array of `T` type values.
 * For integers it checks the value with `parseInt` fn and push
 * that value to the final array if `Number.isInteger(T)`
 * returns true, otherwise, will push the value if it is not
 * an empty string
 */
export const parseRawData = <T>(rawData: string): T[] => {
	const strData = rawData.split(" ");
	const finalData: T[] = [];

	for (const str of strData) {
		const int = parseInt(str);

		if (Number.isInteger(int)) {
			finalData.push(int as T);
		} else if (str !== "") {
			finalData.push(str as T);
		}
	}

	return finalData;
};
