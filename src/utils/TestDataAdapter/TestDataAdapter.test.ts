import { TestDataAdapter } from "utils/TestDataAdapter/TestDataAdapter.ts";
import testData from "./TestDataAdapter.data.json" with { type: "json" };
import { assertEquals } from "std/assert/mod.ts";

Deno.test("#getInputs", () => {
	const testAdapter = new TestDataAdapter(testData);

	const inputs = testAdapter.getInputs("compact-number");

	assertEquals(inputs, [[1, 2, 3, 4, 5, 6, 6, 4]]);
});

Deno.test("#getOutputs", () => {
	const testAdapter = new TestDataAdapter(testData);

	const outputs = testAdapter.getExpectedResults("compact-number");

	assertEquals(outputs, [[1, 4, 2, 5, 0, 8, 9, 9]]);
});
