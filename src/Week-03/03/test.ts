import XORStrings, { Bit } from "./XORStrings.ts";

type TestCase = {
	A: Array<Bit>;
	B: Array<Bit>;
};

const testCases: Array<TestCase> = [
	{
		A: ["1", "0", "1", "0", "1"],
		B: ["0", "0", "1", "0", "1"],
	},
];

testCases.forEach((test: TestCase) => {
	console.log(XORStrings(test.A, test.B));
});
