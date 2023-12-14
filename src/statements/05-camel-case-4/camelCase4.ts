type StringOperation = {
	operation: "split" | "combine";
	transformation: "method" | "class" | "variable";
	text: string;
};

type SegmenterDictionary = {
	[op in StringOperation["operation"]]: (text: string) => string[];
};

type SegmentsData = ReturnType<typeof getSegments>;

type Action = (segments: string[]) => string;

export const camelCase4 = (instruction: string) => {
	const data = instructionAdapter(instruction);
	const textDivision = getSegments(data);

	switch (data.transformation) {
		case "class":
			return processClass(textDivision);

		case "method":
			return processMethod(textDivision);

		case "variable":
			return processVariable(textDivision);
	}
};

const getSegments = ({ operation, text }: StringOperation) => {
	const dictionary: SegmenterDictionary = {
		split: splitByCapitalLetters,
		combine: splitBySpaces,
	};

	return { segments: dictionary[operation](text), operation };
};

const processClass = ({ segments, operation }: SegmentsData) => {
	switch (operation) {
		case "split":
			return splitClass(segments);
		case "combine":
			return combineClass(segments);
	}
};

const splitClass: Action = (segments) =>
	segments
		.map((s) => s.toLowerCase())
		.join(" ");

const combineClass: Action = (segments) =>
	segments
		.map((s) => capitalize(s))
		.join("");

const processMethod = ({ segments, operation }: SegmentsData) => {
	switch (operation) {
		case "split":
			return splitMethod(segments);
		case "combine":
			return combineMethod(segments);
	}
};

const splitMethod: Action = (segments) => {
	const firstWord = segments.shift()!;

	const innerWords = segments.map((s) => s.toLowerCase());

	const lastWordWithNoParenthesis = innerWords
		.pop()!
		.replace("()", "");

	return [firstWord, ...innerWords, lastWordWithNoParenthesis].join(" ");
};

const combineMethod: Action = (segments) => {
	const firstWord = segments.shift() ?? "";

	return firstWord + segments
		.map((s) => capitalize(s))
		.join("")
		.concat("()");
};

const processVariable = ({ segments, operation }: SegmentsData) => {
	switch (operation) {
		case "split":
			return splitVariable(segments);
		case "combine":
			return combineVariable(segments);
	}
};

const splitVariable: Action = (segments) => {
	const firstWord = segments.shift() ?? "";

	return [
		firstWord,
		...segments.map((s) => s.toLowerCase()),
	].join(" ");
};

const combineVariable: Action = (segments) => {
	const firstWord = segments.shift() ?? "";

	return firstWord + segments
		.map((segment) => capitalize(segment)).join("");
};

const instructionAdapter = (instruction: string) => {
	const ops = { "S": "split", "C": "combine" };
	const trans = { "M": "method", "C": "class", "V": "variable" };
	const rawConfig = instruction.split(";");

	const operation = ops[rawConfig[0] as keyof typeof ops];
	const transformation = trans[rawConfig[1] as keyof typeof trans];

	return {
		operation,
		transformation,
		text: rawConfig[2],
	} as StringOperation;
};

const splitByCapitalLetters = (text: string) => {
	return text.split(/(?=[A-Z])/);
};

const splitBySpaces = (text: string) => {
	return text.split(/\s/);
};

const capitalize = (word: string) => {
	const searchFirstLetter = /^\w/;

	return word.replace(
		searchFirstLetter,
		(firstLetter) => firstLetter.toUpperCase(),
	);
};
