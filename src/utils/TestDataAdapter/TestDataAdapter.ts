type CompactString = "compact-string";
type CompactNumber = "compact-number";
type Ready = "ready";

type DataSetType = CompactString | CompactNumber | Ready;

export class TestDataAdapter {
	private readonly inputType: DataSetType;
	private readonly outputType: DataSetType;
	private readonly data: unknown[];
}
