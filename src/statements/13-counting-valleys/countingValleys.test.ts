import { assertEquals } from "std/assert/mod.ts";
import { TestDataAdapter } from "utils/TestDataAdapter/TestDataAdapter.ts";
import testingBundle from "./counting-valleys.data.json" with { type: "json" };
import { countingValleys } from "./countingValleys.ts";

Deno.test("#countingValleys", () => {
	const adapter = new TestDataAdapter(testingBundle);

	const computedResults = adapter
		.getInputs<string>("ready")
		.map((input) => countingValleys(input));

	assertEquals(computedResults, adapter.getExpectedResults("ready"));
});
