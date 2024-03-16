import { assertEquals } from "std/assert/mod.ts";
import { TestDataAdapter } from "utils/TestDataAdapter/TestDataAdapter.ts";
import testingBundle from "./sales-by-match.data.json" with { type: "json" };
import { salesByMatch } from "./salesByMatch.ts";

Deno.test("#salesByMatch", () => {
	const adapter = new TestDataAdapter(testingBundle);

	const computedResults = adapter
		.getInputs("")
		.map((input) => salesByMatch(input));

	assertEquals(computedResults, adapter.getExpectedResults(""));
});
