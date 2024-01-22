import { assertEquals } from "std/assert/mod.ts";
import { TestDataAdapter } from "utils/TestDataAdapter/TestDataAdapter.ts";
import testingBundle from "./counting-sort.data.json" with { type: "json" };
import { countingSort } from "./countingSort.ts";

Deno.test("#countingSort", () => {
	const adapter = new TestDataAdapter(testingBundle);

	const computedResults = adapter
		.getInputs("")
		.map((input) => countingSort(input));

	assertEquals(computedResults, adapter.getExpectedResults(""));
});
