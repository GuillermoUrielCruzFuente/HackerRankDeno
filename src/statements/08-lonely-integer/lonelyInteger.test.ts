import { assertEquals } from "std/assert/mod.ts";
import testingBundle from "./lonely-integer.data.json" with { type: "json" };
import { lonelyInteger } from "./lonelyInteger.ts";
import { TestDataAdapter } from "utils/TestDataAdapter/TestDataAdapter.ts";

Deno.test("#lonelyInteger", () => {
	const adapter = new TestDataAdapter(testingBundle);

	const computedResults = adapter
		.getInputs("compact-number")
		.map((input) => lonelyInteger(input));

	assertEquals(computedResults, adapter.getExpectedResults("ready"));
});
