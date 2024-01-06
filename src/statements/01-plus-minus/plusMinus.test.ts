import { assertEquals } from "std/assert/mod.ts";
import { plusMinus, type RatioFormattedTuple } from "./plusMinus.ts";
import { TestDataAdapter } from "utils/TestDataAdapter/TestDataAdapter.ts";
import plusMinusData from "./plus-minus.data.json" with { type: "json" };

Deno.test("#plusMinus", () => {
	const dataAdapter = new TestDataAdapter(plusMinusData);

	const computedResults = dataAdapter
		.getInputs("compact-number")
		.map((input) => plusMinus(input));

	assertEquals(computedResults, dataAdapter.getExpectedResults<RatioFormattedTuple>("ready"));
});
