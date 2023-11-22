import { NameAdapter } from "utils/NameAdapter.ts";
import { defaultRawTemplates } from "utils/templates/rawTemplates.ts";

export interface RawTemplates {
	generateJsonDataTemplate: () => string;
	generateMDTemplate: (name: NameAdapter) => string;
	generateTestTemplate: (name: NameAdapter) => string;
	generateFuncTemplate: (name: NameAdapter) => string;
}

export type StatementTemplaterConfig = {
	name: string;
	generalDir?: string;
	rawTemplates?: RawTemplates;
};

export class StatementScaffolder {
	#name: NameAdapter;
	#generalDir: string;
	#folderName: string;
	#statementDirectory: string;
	#encoder: TextEncoder;
	#rawTemplates: RawTemplates;

	constructor({ name, generalDir, rawTemplates }: StatementTemplaterConfig) {
		this.#name = new NameAdapter(name);
		this.#generalDir = generalDir ?? "./src/statements/";
		this.#folderName = this.#computeFolderName();
		this.#statementDirectory = this.#generalDir + this.#folderName;
		this.#encoder = new TextEncoder();
		this.#rawTemplates = rawTemplates ?? defaultRawTemplates;
	}

	#computeFolderName() {
		const next = this.#getLastStatementNumber() + 1;
		const nPrefix = next < 9 ? `0${next}` : next;
		return `${nPrefix}-${this.#name.kebabCase}`;
	}

	#getLastStatementNumber() {
		const currentFolders = Array.from(Deno.readDirSync(this.#generalDir));

		if (currentFolders.length === 0) return 0;

		currentFolders.sort((a, b) => {
			if (a.name < b.name) return -1;
			if (a.name > b.name) return 1;
			return 0;
		});

		const lastStatement = currentFolders[currentFolders.length - 1];

		return Number(lastStatement.name.split("-")?.[0]);
	}

	generateScaffold() {
		this.#createDirectory();

		this.#generateDataFile();
		this.#generateDescriptionFile();
		this.#generateTestingFile();
		this.#generateFunctionFile();
	}

	#createDirectory() {
		Deno.mkdirSync(this.#statementDirectory);
	}

	#generateDataFile() {
		Deno.writeFileSync(
			`${this.#statementDirectory}/${this.#name.kebabCase}.data.json`,
			this.#jsonDataEncoded,
		);
	}

	get #jsonDataEncoded() {
		return this.#encoder.encode(
			this.#rawTemplates.generateJsonDataTemplate(),
		);
	}

	#generateDescriptionFile() {
		Deno.writeFileSync(
			`${this.#statementDirectory}/${this.#name.kebabCase}.md`,
			this.#descriptionFileEncoded,
		);
	}

	get #descriptionFileEncoded() {
		return this.#encoder.encode(
			this.#rawTemplates.generateMDTemplate(this.#name),
		);
	}

	#generateTestingFile() {
		Deno.writeFileSync(
			`${this.#statementDirectory}/${this.#name.camelCase}.test.ts`,
			this.#testingFileEncoded,
		);
	}

	get #testingFileEncoded() {
		return this.#encoder.encode(
			this.#rawTemplates.generateTestTemplate(this.#name),
		);
	}

	#generateFunctionFile() {
		Deno.writeFileSync(
			`${this.#statementDirectory}/${this.#name.camelCase}.ts`,
			this.#functionFileEncoded,
		);
	}

	get #functionFileEncoded() {
		return this.#encoder.encode(
			this.#rawTemplates.generateFuncTemplate(this.#name),
		);
	}
}
