import { assertEquals } from "std/assert/mod.ts";
import { TestDataAdapter } from "utils/TestDataAdapter/TestDataAdapter.ts";
import testingBundle from "./subarray-division-2.data.json" with { type: "json" };
import { subarrayDivision2 } from "./subarrayDivision2.ts";

Deno.test("#subarrayDivision2", () => {
	const adapter = new TestDataAdapter(testingBundle);

	const computedResults = adapter
		.getInputs("")
		.map((input) => subarrayDivision2(input));

	assertEquals(computedResults, adapter.getExpectedResults(""));
});
