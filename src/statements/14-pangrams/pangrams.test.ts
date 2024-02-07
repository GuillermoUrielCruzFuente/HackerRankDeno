import { assertEquals } from "std/assert/mod.ts";
import { TestDataAdapter } from "utils/TestDataAdapter/TestDataAdapter.ts";
import testingBundle from "./pangrams.data.json" with { type: "json" };
import { pangrams } from "./pangrams.ts";

Deno.test("#pangrams", () => {
	const adapter = new TestDataAdapter(testingBundle);

	const computedResults = adapter
		.getInputs<string>("ready")
		.map((input) => pangrams(input));

	assertEquals(computedResults, adapter.getExpectedResults("ready"));
});
