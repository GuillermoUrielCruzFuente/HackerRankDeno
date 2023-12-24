import { NameAdapter } from "utils/NameAdapter.ts";
import { defaultRawTemplates } from "./rawTemplates.ts";

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
		this.#generateFiles();
	}

	#createDirectory() {
		Deno.mkdirSync(this.#statementDirectory);
	}

	#generateFiles() {
		for (const { path, rawTemplate } of this.#scaffoldFiles) {
			const fullPath = this.#statementDirectory + path;
			const encodedTemplate = this.#encoder.encode(rawTemplate);

			Deno.writeFileSync(fullPath, encodedTemplate);
		}
	}

	get #scaffoldFiles() {
		const {
			generateJsonDataTemplate,
			generateFuncTemplate,
			generateMDTemplate,
			generateTestTemplate,
		} = this.#rawTemplates;

		return [
			{
				path: this.#dataFilePath,
				rawTemplate: generateJsonDataTemplate(),
			},
			{
				path: this.#descriptionFilePath,
				rawTemplate: generateMDTemplate(this.#name),
			},
			{
				path: this.#testingFilePath,
				rawTemplate: generateTestTemplate(this.#name),
			},
			{
				path: this.#functionFilePath,
				rawTemplate: generateFuncTemplate(this.#name),
			},
		];
	}

	get #dataFilePath() {
		return `/${this.#name.kebabCase}.data.json`;
	}

	get #descriptionFilePath() {
		return `/${this.#name.kebabCase}.md`;
	}

	get #testingFilePath() {
		return `/${this.#name.camelCase}.test.ts`;
	}

	get #functionFilePath() {
		return `/${this.#name.camelCase}.ts`;
	}
}
