import { assertEquals } from "std/assert/mod.ts";
import { TestDataAdapter } from "utils/TestDataAdapter/TestDataAdapter.ts";
import testingBundle from "./permuting-two-arrays.data.json" with { type: "json" };
import { permutingTwoArrays } from "./permutingTwoArrays.ts";

Deno.test("#permutingTwoArrays", () => {
	const adapter = new TestDataAdapter(testingBundle);

	const computedResults = adapter
		.getInputs("")
		.map((input) => permutingTwoArrays(input));

	assertEquals(computedResults, adapter.getExpectedResults(""));
});
