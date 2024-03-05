import { assertEquals } from "std/assert/mod.ts";
import { TestDataAdapter } from "utils/TestDataAdapter/TestDataAdapter.ts";
import testingBundle from "./permuting-two-arrays.data.json" with { type: "json" };
import { type CanPermute, type PermutingParams, permutingTwoArrays } from "./permutingTwoArrays.ts";

Deno.test("#permutingTwoArrays", () => {
	const adapter = new TestDataAdapter(testingBundle);

	const computedResults = adapter
		.getInputs<PermutingParams>("ready")
		.map((input) => permutingTwoArrays(input));

	assertEquals(computedResults, adapter.getExpectedResults<CanPermute>("ready"));
});
