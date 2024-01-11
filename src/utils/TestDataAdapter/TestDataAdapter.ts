type CompactString = "compact-string";
type CompactNumber = "compact-number";
type Ready = "ready";

type DataSetType = CompactString | CompactNumber | Ready;

type Data = {
	data: unknown[];
};

type InputCaseData = {
	input: string;
};

type InputReadyCaseData<T> = {
	input: T;
};

type OutputCaseData = {
	output: string;
};

type OutputReadyCaseData<T> = {
	output: T;
};

export class TestDataAdapter {
	private readonly data: unknown[];

	constructor({ data }: Data) {
		this.data = data;
	}

	private transformRawStringData(rawData: string) {
		return rawData.split(" ");
	}

	/**
	 * Use the well known plus unary operator to convert
	 * strings to numbers, and store them into an array
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus}
	 * @param rawData string
	 * @returns array of numbers (integers or floats)
	 */
	private transformRawNumberData(rawData: string) {
		const finalData = [];

		for (const str of rawData.split(" ")) {
			const n = +str;

			if (Number.isNaN(n) || str === "") continue;

			finalData.push(n);
		}

		return finalData;
	}

	public getInputs(type: CompactString): string[][];
	public getInputs(type: CompactNumber): number[][];
	public getInputs<InputType>(type: Ready): InputType[];
	public getInputs<InputType = unknown>(type: DataSetType) {
		switch (type) {
			case "compact-string": {
				return this.data.map((dataSet) => {
					const { input: rawInput } = dataSet as InputCaseData;
					return this.transformRawStringData(rawInput);
				});
			}

			case "compact-number": {
				return this.data.map((dataSet) => {
					const { input: rawInput } = dataSet as InputCaseData;
					return this.transformRawNumberData(rawInput);
				});
			}

			case "ready": {
				return this.data.map((dataSet) => {
					const { input: readyInput } = dataSet as InputReadyCaseData<InputType>;
					return readyInput;
				});
			}
		}
	}

	public getExpectedResults(type: CompactString): string[][];
	public getExpectedResults(type: CompactNumber): number[][];
	public getExpectedResults<OutputType>(type: Ready): OutputType[];
	public getExpectedResults<OutputType = unknown>(type: DataSetType) {
		switch (type) {
			case "compact-string": {
				return this.data.map((dataSet) => {
					const { output: rawInput } = dataSet as OutputCaseData;
					return this.transformRawStringData(rawInput);
				});
			}

			case "compact-number": {
				return this.data.map((dataSet) => {
					const { output: rawInput } = dataSet as OutputCaseData;
					return this.transformRawNumberData(rawInput);
				});
			}

			case "ready": {
				return this.data.map((dataSet) => {
					const { output: readyInput } = dataSet as OutputReadyCaseData<OutputType>;
					return readyInput;
				});
			}
		}
	}
}
