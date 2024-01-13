import { assertEquals } from "std/assert/mod.ts";
import { testDataParser } from "utils/transformRawData.ts";
import testingBundle from "./lonely-integer.data.json" with { type: "json" };
import { lonelyInteger } from "./lonelyInteger.ts";

Deno.test("#lonelyInteger", () => {
	const {
		inputsToCompute,
		expectedResults,
	} = testDataParser<T, G>(testingBundle);

	const computedResults = inputsToCompute.map((input) => lonelyInteger(input));

	assertEquals(computedResults, expectedResults);
});
