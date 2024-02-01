export const names = [
	{ input: "a", expected: false },
	{ input: "ab", expected: false },
	{ input: "abc", expected: false },
	{ input: "abcd", expected: false },
	{ input: "abcde", expected: true },
	{ input: "this is a test", expected: true },
	{ input: "Mini-max sum", expected: true },
	{ input: "letter ñ", expected: false },
	{ input: "this is a-test", expected: true },
	{ input: "almost there ", expected: false },
	{ input: "- - ", expected: false },
	{ input: "-", expected: false },
	{ input: "this-should-be-true", expected: true },
	{ input: "-this-can-not-be-possible-", expected: false },
	{ input: "-this can-not be-possible-", expected: false },
	{ input: "this can-not--be-possible", expected: false },
	{ input: "but this can-be-possible", expected: true },
	{ input: "fiveC--", expected: false },
	{ input: "fiveC -", expected: false },
	{ input: "- fiveC ", expected: false },
	{ input: "What  about this  ", expected: false },
	{ input: "and   this   other", expected: false },
	{ input: "this is the 22nd try", expected: true },
	{ input: "detail-oriented stuff", expected: true },
	{ input: "detail -oriented stuff", expected: false },
	{ input: "detail - oriented stuff", expected: false },
	{ input: "detailoriented- stuff", expected: false },
	{ input: "Counting Sort 1", expected: true },
	{ input: "Counting Sort 1123", expected: true },
	{ input: "1 Counting Sort", expected: true },
];

export const extraHyphens = [
	{ input: "-this-is-a-test-", expected: "this-is-a-test" },
	{ input: "---this-is-a-test---", expected: "this-is-a-test" },
	{ input: "-this-is-a-test-", expected: "this-is-a-test" },
	{ input: "now-with--inner--case", expected: "now-with-inner-case" },
	{ input: "-now-with--inner--case-", expected: "now-with-inner-case" },
	{ input: "--this---is--a-------mess----", expected: "this-is-a-mess" },
];

export const extraSpaces = [
	{
		input: " this is a bad  spacing   example  ",
		expected: "this is a bad spacing example",
	},
	{
		input: "             index      zero based  ",
		expected: "index zero based",
	},
];
