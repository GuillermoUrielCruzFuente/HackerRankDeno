import { assertEquals } from "std/assert/mod.ts";
import { TestDataAdapter } from "utils/TestDataAdapter/TestDataAdapter.ts";
import testingBundle from "./diagonal-difference.data.json" with { type: "json" };
import { diagonalDifference } from "./diagonalDifference.ts";

Deno.test("#diagonalDifference", () => {
	const adapter = new TestDataAdapter(testingBundle);

	const computedResults = adapter
		.getInputs<number[][]>("ready")
		.map((input) => diagonalDifference(input));

	assertEquals(computedResults, adapter.getExpectedResults("ready"));
});
