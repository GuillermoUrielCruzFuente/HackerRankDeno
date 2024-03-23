import { assertEquals } from "std/assert/mod.ts";
import { TestDataAdapter } from "utils/TestDataAdapter/TestDataAdapter.ts";
import testingBundle from "./maximum-perimeter-triangle.data.json" with { type: "json" };
import { maximumPerimeterTriangle } from "./maximumPerimeterTriangle.ts";

Deno.test("#maximumPerimeterTriangle", () => {
	const adapter = new TestDataAdapter(testingBundle);

	const computedResults = adapter
		.getInputs("")
		.map((input) => maximumPerimeterTriangle(input));

	assertEquals(computedResults, adapter.getExpectedResults(""));
});
