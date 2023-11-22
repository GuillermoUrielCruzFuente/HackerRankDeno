import { NameAdapter } from "utils/NameAdapter.ts";
import { type RawTemplates } from "utils/templates/StatementScaffolder.ts";

/**
 * @returns testing data bundle string template
 */
const generateJsonDataTemplate = () => (`
{
	"data": [
		{
			"input": "",
			"output": ""
		}
	]
}
`.trimStart());

/**
 * @returns statement description string template
 */
const generateMDTemplate = (name: NameAdapter) => (`
# ${name.capitalizedSentence}
`.trimStart());

/**
 * @returns testing string template
 */
const generateTestTemplate = (name: NameAdapter) => (`
import { assertEquals } from "std/assert/mod.ts";
import { testDataParser } from "utils/transformRawData.ts";
import testingBundle from "./${name.kebabCase}.data.json" with { type: "json" };
import { ${name.camelCase} } from "./${name.camelCase}.ts";

Deno.test("#${name.camelCase}", () => {
	const {
		inputsToCompute,
		expectedResults,
	} = testDataParser<T, G>(testingBundle);

	const computedResults = inputsToCompute.map((input) => ${name.camelCase}(input));

	assertEquals(computedResults, expectedResults);
});
`.trimStart());

/**
 * @returns main function string template
 */
const generateFuncTemplate = (name: NameAdapter) => (`
export const ${name.camelCase} = () => {};
`.trimStart());

export const defaultRawTemplates: RawTemplates = {
	generateJsonDataTemplate,
	generateFuncTemplate,
	generateMDTemplate,
	generateTestTemplate,
};
