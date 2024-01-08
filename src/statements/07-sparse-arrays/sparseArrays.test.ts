import { assertEquals } from "std/assert/mod.ts";
import { TestDataAdapter } from "utils/TestDataAdapter/TestDataAdapter.ts";
import testingBundle from "./sparse-arrays.data.json" with { type: "json" };
import { sparseArrays } from "./sparseArrays.ts";

Deno.test("#sparseArrays", () => {
	const testAdapter = new TestDataAdapter(testingBundle);

	const computedResults = testAdapter
		.getInputs<{ strings: string; queries: string }>("ready")
		.map((input) => sparseArrays(input));

	assertEquals(computedResults, testAdapter.getExpectedResults<number[]>("ready"));
});
