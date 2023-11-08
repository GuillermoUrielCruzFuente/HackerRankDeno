import { assertEquals } from "std/assert/mod.ts";
import { type DataTuple, miniMaxSum, type MinMaxTuple } from "./MiniMaxSum.ts";
import miniMaxSumData from "./mini-max-sum.data.json" with { type: "json" };
import { testDataParser } from "../../utils/transformRawData.ts";

Deno.test("#miniMaxSum", () => {
	const {
		inputsToCompute,
		expectedResults,
	} = testDataParser<DataTuple, MinMaxTuple>(miniMaxSumData);

	const computedResults = inputsToCompute.map((input, i) => {
		const result = miniMaxSum(input);
		const expected = expectedResults[i];

		console.log({
			input,
			result,
			expected,
		});

		return result;
	});

	assertEquals(computedResults, expectedResults);
});
