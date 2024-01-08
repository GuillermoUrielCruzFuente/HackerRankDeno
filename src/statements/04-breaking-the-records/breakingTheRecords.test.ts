import { assertEquals } from "std/assert/mod.ts";
import testingBundle from "./breaking-the-records.data.json" with { type: "json" };
import { breakingTheRecords } from "./breakingTheRecords.ts";
import { TestDataAdapter } from "utils/TestDataAdapter/TestDataAdapter.ts";

Deno.test("#breakingTheRecords", () => {
	const dataAdapter = new TestDataAdapter(testingBundle);

	const computedResults = dataAdapter
		.getInputs("compact-number")
		.map((input) => breakingTheRecords(input));

	assertEquals(computedResults, dataAdapter.getExpectedResults("compact-number"));
});
