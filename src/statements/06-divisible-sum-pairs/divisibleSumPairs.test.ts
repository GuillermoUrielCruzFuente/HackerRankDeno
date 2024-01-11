import { assertEquals } from "std/assert/mod.ts";
import testingBundle from "./divisible-sum-pairs.data.json" with { type: "json" };
import { divisibleSumPairs, type SumPairsInput } from "./divisibleSumPairs.ts";
import { TestDataAdapter } from "utils/TestDataAdapter/TestDataAdapter.ts";

Deno.test("#divisibleSumPairs", () => {
	const adapter = new TestDataAdapter(testingBundle);

	const computedResults = adapter
		.getInputs<SumPairsInput>("ready")
		.map((input) => divisibleSumPairs(input));

	assertEquals(computedResults, adapter.getExpectedResults("ready"));
});
