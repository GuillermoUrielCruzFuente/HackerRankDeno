import { assertEquals } from "std/assert/mod.ts";
import { TestDataAdapter } from "utils/TestDataAdapter/TestDataAdapter.ts";
import testingBundle from "./grading-students.data.json" with { type: "json" };
import { gradingStudents } from "./gradingStudents.ts";

Deno.test("#gradingStudents", () => {
	const adapter = new TestDataAdapter(testingBundle);

	const computedResults = adapter
		.getInputs("compact-number")
		.map((input) => gradingStudents(input));

	assertEquals(computedResults, adapter.getExpectedResults("compact-number"));
});
