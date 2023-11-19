import { assertEquals } from "std/assert/mod.ts";
import { testDataParser } from "utils/transformRawData.ts";
import testingBundle from "./breaking-the-records.data.json" with { type: "json" };
import { breakingTheRecords } from "./breakingTheRecords.ts";

Deno.test("#breakingTheRecords", () => {
	const {
		inputsToCompute,
		expectedResults,
	} = testDataParser<T, G>(testingBundle);

	const computedResults = inputsToCompute.map((input) => breakingTheRecords(input));

	assertEquals(computedResults, expectedResults);
});
