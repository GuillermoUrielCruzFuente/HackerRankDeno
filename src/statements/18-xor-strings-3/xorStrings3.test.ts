import { assertEquals } from "std/assert/mod.ts";
import { TestDataAdapter } from "utils/TestDataAdapter/TestDataAdapter.ts";
import testingBundle from "./xor-strings-3.data.json" with { type: "json" };
import { type Params, xorStrings3 } from "./xorStrings3.ts";

Deno.test("#xorStrings3", () => {
	const adapter = new TestDataAdapter(testingBundle);

	const computedResults = adapter
		.getInputs<Params>("ready")
		.map((input) => xorStrings3(input));

	assertEquals(computedResults, adapter.getExpectedResults("ready"));
});
