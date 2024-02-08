import { assertEquals } from "std/assert/mod.ts";
import { TestDataAdapter } from "utils/TestDataAdapter/TestDataAdapter.ts";
import testingBundle from "./mars-exploration.data.json" with { type: "json" };
import { marsExploration } from "./marsExploration.ts";

Deno.test("#marsExploration", () => {
	const adapter = new TestDataAdapter(testingBundle);

	const computedResults = adapter
		.getInputs("")
		.map((input) => marsExploration(input));

	assertEquals(computedResults, adapter.getExpectedResults(""));
});
