import { assertEquals } from "std/assert/mod.ts";
import { miniMaxSum } from "./miniMaxSum.ts";
import miniMaxSumData from "./mini-max-sum.data.json" with { type: "json" };
import { TestDataAdapter } from "utils/TestDataAdapter/TestDataAdapter.ts";

Deno.test("#miniMaxSum", () => {
	const dataAdapter = new TestDataAdapter(miniMaxSumData);

	const computedResults = dataAdapter
		.getInputs("compact-number")
		.map((input) => miniMaxSum(input));

	assertEquals(computedResults, dataAdapter.getExpectedResults("compact-number"));
});
