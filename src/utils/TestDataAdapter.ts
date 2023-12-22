type AdapterConfig = {
	input: string | object;
	output: string | object;
	inputAsArray?: boolean;
	outputAsArray?: boolean;
};

type DataSetType = "compact" | "ready";

type TestCaseData<T, E> = {
	input: T;
	output: E;
};

export class TestDataAdapter<InputType, ExpectedType> {
	private data: unknown[];
	private inputType: DataSetType;
	private outputType: DataSetType;

	constructor(
		{ data }: { data: unknown[] },
		{ inputType, outputType }: { inputType: DataSetType; outputType: DataSetType },
	) {
		this.data = data;
		this.inputType = inputType;
		this.outputType = outputType;
	}

	private transformRawData(rawData: string) {
		const strData = rawData.split(" ");
		const finalData = [];

		for (const str of strData) {
			const int = parseInt(str);

			if (Number.isInteger(int)) {
				finalData.push(int);
			} else if (str !== "") {
				finalData.push(str);
			}
		}

		return finalData;
	}

	parseData() {
		if (this.inputType === "compact") {
			for (const dataSet of this.data) {
				const parsedData = this.transformRawData(
					(dataSet as TestCaseData<string, unknown>).input,
				) as InputType;
			}
		}

		return {
			inputs: [] as InputType,
			expectedValues: "" as ExpectedType,
		};
	}
}

// input 	->	compact
// output 	->	ready array

// input 	->	ready
// output 	->	ready

const data = {
	data: [
		{ input: "", output: "" },
	],
};

const { inputs, expectedValues } = new TestDataAdapter(data, {
	inputType: "ready",
	outputType: "ready",
}).parseData();

// input 	->	compact
// output 	->	compact

// input 	->	ready object
// output 	->	ready array
