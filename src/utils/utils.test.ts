import { assertEquals } from "std/assert/mod.ts";
import { createRandomArray } from "utils/dataGeneration.ts";

Deno.test("#createRandomArray", () => {
	const expectedLength = 10000;
	const array = createRandomArray(expectedLength);

	assertEquals(array.length, expectedLength);
});
