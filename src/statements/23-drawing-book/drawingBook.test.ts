import { assertEquals } from "std/assert/mod.ts";
import { TestDataAdapter } from "utils/TestDataAdapter/TestDataAdapter.ts";
import testingBundle from "./drawing-book.data.json" with { type: "json" };
import { drawingBook, drawingBookParams } from "./drawingBook.ts";

Deno.test("#drawingBook", () => {
	const adapter = new TestDataAdapter(testingBundle);

	const computedResults = adapter
		.getInputs<drawingBookParams>("ready")
		.map((input) => drawingBook(input));

	assertEquals(computedResults, adapter.getExpectedResults("ready"));
});
