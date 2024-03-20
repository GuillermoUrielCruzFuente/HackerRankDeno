import { sales, salesByMatch } from "./salesByMatch.ts";
import { createRandomArray } from "utils/dataGeneration.ts";

const array = createRandomArray(10000);

// wins! 74.85 µs/iter
Deno.bench("dictionary", (context) => {
	const data = structuredClone(array);

	context.start();
	salesByMatch(data);
	context.end();
});

// 68.41 ms/iter
Deno.bench("for loops", (context) => {
	const data = structuredClone(array);

	context.start();
	sales(data);
	context.end();
});
