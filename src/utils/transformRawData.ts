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

type TestParsedData<ArgsType, ExpectedReturnType> = {
	inputsToCompute: ArgsType[];
	expectedResults: ExpectedReturnType[];
};

type TestCaseData = {
	input: string;
	output: unknown;
};

type TestingDataBundle = {
	data: TestCaseData[];
};

export const testDataParser = <InputType, ExpectedReturnType>(
	{ data }: TestingDataBundle,
): TestParsedData<InputType, ExpectedReturnType> => {
	const inputsToCompute: InputType[] = [];
	const expectedResults: ExpectedReturnType[] = [];

	for (const [i, { input, output }] of Object.entries(data)) {
		if (typeof input !== "string") {
			console.warn(
				`not valid test case input, skipping testing bundle at index ${i}`,
			);
			break;
		}

		const parsedInput = parseRawData(input) as InputType;
		inputsToCompute.push(parsedInput);

		const outputType = typeof output;

		switch (outputType) {
			case "string": {
				const parsedOutput = parseRawData(
					output as string,
				) as ExpectedReturnType;
				expectedResults.push(parsedOutput);
				break;
			}

			case "object": {
				expectedResults.push(output as ExpectedReturnType);
				break;
			}
		}
	}

	return { inputsToCompute, expectedResults };
};
