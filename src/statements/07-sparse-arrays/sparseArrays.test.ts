import { assertEquals } from "std/assert/mod.ts";
import { testDataParser } from "utils/transformRawData.ts";
import testingBundle from "./sparse-arrays.data.json" with { type: "json" };
import { sparseArrays } from "./sparseArrays.ts";

Deno.test("#sparseArrays", () => {
	const {
		inputsToCompute,
		expectedResults,
	} = testDataParser<T, G>(testingBundle);

	const computedResults = inputsToCompute.map((input) => sparseArrays(input));

	assertEquals(computedResults, expectedResults);
});
