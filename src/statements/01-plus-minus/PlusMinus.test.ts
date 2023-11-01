import { assertEquals } from "std/assert/mod.ts";
import { plusMinus } from "./PlusMinus.ts";
import { typedParser } from "../../utils/transformRawData.ts";
import plusMinusData from "./plus-minus.data.json" with { type: "json" };

Deno.test("#plusMinus", () => {
	const { inputs, expectedResults } = typedParser<number, string[]>(
		plusMinusData,
	);

	const computedResults = inputs.map((input) => plusMinus(input));

	console.log({ inputs, computedResults, expectedResults });

	assertEquals(computedResults, expectedResults);
});
