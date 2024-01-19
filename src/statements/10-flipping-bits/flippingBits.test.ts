import { assertEquals } from "std/assert/mod.ts";
import { TestDataAdapter } from "utils/TestDataAdapter/TestDataAdapter.ts";
import testingBundle from "./flipping-bits.data.json" with { type: "json" };
import { flippingBits } from "./flippingBits.ts";

Deno.test("#flippingBits", () => {
	const adapter = new TestDataAdapter(testingBundle);

	const computedResults = adapter
		.getInputs<number>("ready")
		.map((input) => flippingBits(input));

	assertEquals(computedResults, adapter.getExpectedResults("ready"));
});
