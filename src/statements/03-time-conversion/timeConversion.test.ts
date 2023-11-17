import { assertEquals } from "std/assert/mod.ts";
import testingBundle from "./time-conversion.data.json" with { type: "json" };
import { timeConversion } from "./timeConversion.ts";

Deno.test("#timeConversion", () => {
	const { data } = testingBundle;
	const computedResults = data.map(({ input }) => timeConversion(input));
	const expectedResults = data.map(({ output }) => output);

	assertEquals(computedResults, expectedResults);
});
