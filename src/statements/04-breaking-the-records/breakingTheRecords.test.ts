import { assertEquals } from "std/assert/mod.ts";
import { testDataParser } from "utils/transformRawData.ts";
import testingBundle from "./breaking-the-records.data.json" with { type: "json" };
import { breakingTheRecords, type MinMaxRecordTuple } from "./breakingTheRecords.ts";

Deno.test("#breakingTheRecords", () => {
	const {
		inputsToCompute,
		expectedResults,
	} = testDataParser<number[], MinMaxRecordTuple>(testingBundle);

	const computedResults = inputsToCompute.map((input) => breakingTheRecords(input));

	assertEquals(computedResults, expectedResults);
});
