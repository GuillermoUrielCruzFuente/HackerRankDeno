import { assertEquals } from "std/assert/mod.ts";
import { plusMinus, type RatioFormattedTuple } from "./plusMinus.ts";
import { testDataParser } from "utils/transformRawData.ts";
import plusMinusData from "./plus-minus.data.json" with { type: "json" };

Deno.test("#plusMinus", () => {
	const {
		inputsToCompute,
		expectedResults,
	} = testDataParser<number[], RatioFormattedTuple>(plusMinusData);

	const computedResults = inputsToCompute.map((input, i) => {
		const result = plusMinus(input);
		const expected = expectedResults[i];

		console.log({ input, result, expected });

		return result;
	});

	assertEquals(computedResults, expectedResults);
});
