export const logTestingData = (
	{ inputsToCompute, computedResults, expectedResults }: {
		inputsToCompute: unknown[];
		computedResults: unknown[];
		expectedResults: unknown[];
	},
) => {
	computedResults.forEach((computed, i) => {
		console.log({
			input: inputsToCompute[i],
			computed,
			expected: expectedResults[i],
		});
	});
};
