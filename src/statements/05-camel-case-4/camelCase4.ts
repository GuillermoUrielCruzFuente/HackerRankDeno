type StringOperation = {
	operation: "split" | "combine";
	transformation: "method" | "class" | "variable";
	text: string;
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

	return "";
};

const getSegments = ({ operation, text }: StringOperation) => {
	if (operation === "split") return splitByCapitalLetters(text);
	return splitBySpaces(text);
};

type StringOperation = {
	operation: "split" | "combine";
	transformation: "method" | "class" | "variable";
	text: string;
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
