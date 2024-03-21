import { assertEquals } from "std/assert/mod.ts";
import { TestDataAdapter } from "utils/TestDataAdapter/TestDataAdapter.ts";
import testingBundle from "./migratory-birds.data.json" with { type: "json" };
import { migratoryBirds } from "./migratoryBirds.ts";

Deno.test("#migratoryBirds", () => {
	const adapter = new TestDataAdapter(testingBundle);

	const computedResults = adapter
		.getInputs("")
		.map((input) => migratoryBirds(input));

	assertEquals(computedResults, adapter.getExpectedResults(""));
});
