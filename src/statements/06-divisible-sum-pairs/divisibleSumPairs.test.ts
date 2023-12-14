import { assertEquals } from "std/assert/mod.ts";
import { testDataParser } from "utils/transformRawData.ts";
import testingBundle from "./divisible-sum-pairs.data.json" with { type: "json" };
import { divisibleSumPairs, type SumPairsInput } from "./divisibleSumPairs.ts";

Deno.test("#divisibleSumPairs", () => {
	const {
		inputsToCompute,
		expectedResults,
	} = testDataParser<SumPairsInput, number>(testingBundle);

	const computedResults = inputsToCompute.map((input) => divisibleSumPairs(input));

	assertEquals(computedResults, expectedResults);
});
