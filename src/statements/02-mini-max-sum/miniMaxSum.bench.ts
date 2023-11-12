import { miniMaxSum, miniMaxSum2 } from "./miniMaxSum.ts";
import { createRandomArray } from "utils/dataGeneration.ts";

const test = createRandomArray(5000);

Deno.bench("#miniMaxSum", (context) => {
	const testCopy = [...test];
	context.start();

	miniMaxSum(testCopy);

	context.end();
});

Deno.bench("#miniMaxSum2", (context) => {
	const testCopy = [...test];
	context.start();

	miniMaxSum2(testCopy);

	context.end();
});
