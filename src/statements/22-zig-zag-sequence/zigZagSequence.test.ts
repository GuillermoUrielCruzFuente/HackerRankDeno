import { assertEquals } from "std/assert/mod.ts";
import { TestDataAdapter } from "utils/TestDataAdapter/TestDataAdapter.ts";
import testingBundle from "./zig-zag-sequence.data.json" with { type: "json" };
import { zigZagSequence } from "./zigZagSequence.ts";

Deno.test("#zigZagSequence", () => {
	const adapter = new TestDataAdapter(testingBundle);

	const computedResults = adapter
		.getInputs("compact-number")
		.map((input) => zigZagSequence(input));

	assertEquals(computedResults, adapter.getExpectedResults("compact-number"));
});
