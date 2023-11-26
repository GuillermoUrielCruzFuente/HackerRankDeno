export const logTestingData = (
	{ inputs, computed, expected }: {
		inputs: unknown[];
		computed: unknown[];
		expected: unknown[];
	},
) => {
	computed.forEach((result, i) => {
		console.log({
			input: inputs[i],
			result,
			expected: expected[i],
		});
	});
};
