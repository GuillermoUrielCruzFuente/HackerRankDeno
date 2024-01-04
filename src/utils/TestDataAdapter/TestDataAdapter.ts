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
}
