import { TestDataAdapter } from "utils/TestDataAdapter/TestDataAdapter.ts";
import testData from "./TestDataAdapter.data.json" with { type: "json" };
import { assertEquals } from "std/assert/mod.ts";

Deno.test("TestDataAdapter", () => {
	const testingDataBundle = {
		data: [
			{
				input: "5 6 3 4 4 6 3 3 5 6 3 4 4 6 3 3 4 5 3 5 8",
				output: "1 2 4",
			},
			{
				input: "6 3 6 6 7 2 1 1 5 6 3 4 4 6 3 3 9 0 6 2 6",
				output: "1 2 3",
			},
		],
	};

	const { inputsToCompute, expectedResults } = new TestDataAdapter(testingDataBundle, {
		inputType: "compact-number",
		outputType: "compact-string",
	}).parseData<number[], string[]>();

	console.log({ inputsToCompute, expectedResults });
});
