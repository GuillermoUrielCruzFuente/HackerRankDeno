import { assertEquals } from "std/assert/mod.ts";
import { TestDataAdapter } from "utils/TestDataAdapter/TestDataAdapter.ts";
import testingBundle from "./drawing-book.data.json" with { type: "json" };
import { drawingBook } from "./drawingBook.ts";

Deno.test("#drawingBook", () => {
	const adapter = new TestDataAdapter(testingBundle);

	const computedResults = adapter
		.getInputs("")
		.map((input) => drawingBook(input));

	assertEquals(computedResults, adapter.getExpectedResults(""));
});
