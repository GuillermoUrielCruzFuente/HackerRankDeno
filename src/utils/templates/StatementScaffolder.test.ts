import { StatementScaffolder } from "utils/templates/StatementScaffolder.ts";
import { assertEquals } from "std/assert/mod.ts";

Deno.test("Should create the first statement with '01' number prefix", () => {
	const testingDirectory = "./src/utils/templates/statements-test/";
	Deno.mkdirSync(testingDirectory);

	new StatementScaffolder({
		name: "The first test",
		generalDir: testingDirectory,
	}).generateScaffold();

	const createdDirectory = Array.from(Deno.readDirSync(testingDirectory))[0];
	const prefix = createdDirectory.name.substring(0, 2);

	assertEquals(prefix, "01");

	Deno.removeSync(testingDirectory, { recursive: true });
});
