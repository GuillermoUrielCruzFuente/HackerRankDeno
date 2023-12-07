import { assertEquals } from "std/assert/mod.ts";
import { testDataParser } from "utils/transformRawData.ts";
import testingBundle from "./camel-case-4.data.json" with { type: "json" };
import { camelCase4 } from "./camelCase4.ts";

Deno.test("#camelCase4", () => {
	const {
		inputsToCompute,
		expectedResults,
	} = testDataParser<string, string>(testingBundle, {
		inputAsArray: false,
		outputAsArray: false,
	});

	const computedResults = inputsToCompute.map((input) => camelCase4(input));

	assertEquals(computedResults, expectedResults);
});
