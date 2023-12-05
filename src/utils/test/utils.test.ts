import { assertEquals } from "std/assert/mod.ts";
import { createRandomArray } from "utils/dataGeneration.ts";
import { removeExtraHyphens, removeExtraSpaces, validateName } from "utils/validateName.ts";
import * as data from "utils/test/utils.data.ts";

Deno.test("#createRandomArray", () => {
	const expectedLength = 10000;
	const array = createRandomArray(expectedLength);

	assertEquals(array.length, expectedLength);
});

Deno.test("#validateName", () => {
	data.names.forEach(({ expected, input }) => {
		assertEquals(validateName(input), expected);
	});
});

Deno.test("#removeExtraHyphens", () => {
	data.extraHyphens.forEach(({ input, expected }) => {
		assertEquals(removeExtraHyphens(input), expected);
	});
});

Deno.test("#removeExtraSpaces", () => {
	data.extraSpaces.forEach(({ input, expected }) => {
		assertEquals(removeExtraSpaces(input), expected);
	});
});
