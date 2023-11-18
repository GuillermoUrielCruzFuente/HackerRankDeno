export type TestCaseData = {
	input: string;
	output: string | string[] | number[];
};

export type TestingDataBundle = {
	data: TestCaseData[];
};

export const logTestingData = <T>(
	computedResults: T[],
	testBundle: TestingDataBundle,
) => {
	computedResults.forEach((result, i) => {
		const testCase = testBundle.data[i];
		const input = testCase.input;
		const expected = testCase.output;

		console.log({ input, result, expected });
	});
};
