import { assertEquals } from "std/assert/mod.ts";
import { TestDataAdapter } from "utils/TestDataAdapter/TestDataAdapter.ts";
import testingBundle from "./subarray-division-2.data.json" with { type: "json" };
import { subarrayDivision2, type SubarrayDivision2Params } from "./subarrayDivision2.ts";

Deno.test("#subarrayDivision2", () => {
	const adapter = new TestDataAdapter(testingBundle);

	const computedResults = adapter
		.getInputs<SubarrayDivision2Params>("ready")
		.map((input) => subarrayDivision2(input));

	assertEquals(computedResults, adapter.getExpectedResults<number>("ready"));
});
