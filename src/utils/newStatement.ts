const STATEMENTS_PATH = "./src/statements";

const textEncoder = new TextEncoder();

// deno-fmt-ignore
const generateJSONDataTemplate = () => textEncoder.encode(`
{
	"data": [
		{
			"input": "",
			"output": ""
		}
	]
}
`.trimStart());

// deno-fmt-ignore
const generateMDTemplate = (title: string) => textEncoder.encode(`
# ${title}
`.trimStart());

// deno-fmt-ignore
const generateMainFileTemplate = (functionName: string) => textEncoder.encode(`
export const ${functionName} = () => {};
`.trimStart());

// deno-fmt-ignore
const generateTestFileTemplate = (functionName: string, fileName: string) => textEncoder.encode(`
import { assertEquals } from "std/assert/mod.ts";
import { ${functionName} } from "./${fileName}.ts";

Deno.test("#${functionName}", () => {});
`.trimStart());

/**
 * Create the basic statement file tree structure
 *
 * directory -> nn-statement-name
 * 	file -> kebab-case.data.json
 * 	file -> kebab-case.md
 * 	file -> PascalCase.test.ts
 * 	file -> PascalCase.ts
 */
const createStatementFileTree = (readableName: string) => {
	const currentStatementDirs = Array.from(Deno.readDirSync(STATEMENTS_PATH));
	const lastStatement = currentStatementDirs.findLast((dir) => dir.name)!;
	const nextNumber = Number(lastStatement.name.split("-")?.[0]) + 1;

	const bySpacesAndDashes = /[- ]+/;
	const nameSegments = readableName
		.split(bySpacesAndDashes)
		.map((nameSegment) => nameSegment.toLowerCase());

	const kebabCaseName = [...nameSegments].join("-");

	const pascalCaseName = [...nameSegments].map((nameSegment) => {
		const [firstLetter, ...rest] = nameSegment;
		return [firstLetter.toUpperCase(), ...rest].join("");
	}).join("");

	const camelCaseName = [...nameSegments].map(
		(nameSegment, index) => {
			if (index === 0) {
				return nameSegment;
			}

			const [firstLetter, ...rest] = nameSegment;
			return [firstLetter.toUpperCase(), ...rest].join("");
		},
	).join("");

	nameSegments.unshift(
		nextNumber < 9 ? `0${nextNumber}` : `${nextNumber}`,
	);

	const statementDir = `./src/statements/${nameSegments.join("-")}`;

	Deno.mkdirSync(statementDir);

	// create kebab-case.data.json file
	Deno.writeFileSync(
		`${statementDir}/${kebabCaseName}.data.json`,
		generateJSONDataTemplate(),
	);

	// Create kebab-case.md file
	Deno.writeFileSync(
		`${statementDir}/${kebabCaseName}.md`,
		generateMDTemplate(readableName),
	);

	// Create PascalCase.ts
	Deno.writeFileSync(
		`${statementDir}/${pascalCaseName}.ts`,
		generateMainFileTemplate(camelCaseName),
	);

	// Create PascalCase.test.ts
	Deno.writeFileSync(
		`${statementDir}/${pascalCaseName}.test.ts`,
		generateTestFileTemplate(camelCaseName, pascalCaseName),
	);
};

console.clear();

console.log(
	"%c- Readable format, include spaces and dashes",
	"color: red; font-weight: bold",
);

console.log(
	"%c- An empty name will abort this action",
	"color: red; font-weight: bold",
);

console.log(
	"%cStatement name:",
	"color: chartreuse; font-weight: bold",
);

const statementReadableName = prompt("", "");

const verifyNameStructure = (name?: string) => {
	if (!name) return false;

	return name.length > 0;
};

const isValidName = verifyNameStructure(statementReadableName!);

if (isValidName) {
	createStatementFileTree(statementReadableName!);
} else {
	console.log("%cEmpty name: no new statement was generated!", "color: red");
}
