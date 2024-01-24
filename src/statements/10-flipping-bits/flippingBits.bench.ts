import { convertNumberToBinary, createBinaryString } from "./flippingBits.ts";
import { createRandomArray } from "utils/dataGeneration.ts";

const testingNumbers = createRandomArray(100);

Deno.bench("number to binary - string concant", () => {
	testingNumbers.forEach((n) => {
		convertNumberToBinary(n, 32);
	});
});

Deno.bench("number to binary - w3c for impl", () => {
	testingNumbers.forEach((n) => {
		createBinaryString(n);
	});
});
