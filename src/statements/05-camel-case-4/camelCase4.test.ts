import { assertEquals } from "std/assert/mod.ts";
import testingBundle from "./camel-case-4.data.json" with { type: "json" };
import { camelCase4 } from "./camelCase4.ts";
import { TestDataAdapter } from "utils/TestDataAdapter/TestDataAdapter.ts";

Deno.test("#camelCase4", () => {
	const adapter = new TestDataAdapter(testingBundle);

	const computedResults = adapter
		.getInputs<string>("ready")
		.map((input) => camelCase4(input));

	assertEquals(computedResults, adapter.getExpectedResults("ready"));
});
