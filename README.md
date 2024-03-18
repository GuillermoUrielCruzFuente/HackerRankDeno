# Hacker Rank - 3 months preparation kit

Hacker Rank code playground is slow and I don't really like, so, I decided to work locally and
execute my code with Deno which has built in TypeScript support, and a great ecosystem that helps to
unit test, format and bench code in a really easy way.

## Project structure

All the statements must be inside `src/statements/` directory, each of them must be contained into a
folder meeting the following naming conventions:

- number prefix with two digits
- kebab-case folder name

**Examples**

- for the first statement named `Plus Minus` the folder name must be `01-plus-minus`

- for the tenth statement named `Flipping Bits` the folder name must be `10-flipping-bits`

Also, every statement folder must contain the following files:

- statement-name.data.json
- statement-name.md
- statementName.test.ts
- statementName.ts

And only if it is necessary, a bench file:

- statementName.bench.ts

So, you should end up with a project structure like this:

```
├── src
│   ├── statements
│   │   ├── 01-plus-minus
│   │   │   ├── plus-minus.data.json
│   │   │   ├── plus-minus.md
│   │   │   ├── plusMinus.test.ts
│   │   │   └── plusMinus.ts
│   │   ├── 02-mini-max-sum
│   │   │   ├── mini-max-sum.data.json
│   │   │   ├── mini-max-sum.md
│   │   │   ├── miniMaxSum.bench.ts
│   │   │   ├── miniMaxSum.test.ts
│   │   │   └── miniMaxSum.ts
│   │   ├── nn-statement-name
```

Each of these files will be described as follows.

### Testing data bundle file

> A basic template `statement-name.data.json` is autogenerated using the `new-statement` Deno task.

In order to test the statement functions, we need `input data` and a `expected output`, this data
**must** be in every statement directory. Should be named following the kebab-case standard:
`statement-name.data.json`. And **must** satisfies the following TS type `TestingDataBundle`.

```ts
type TestCaseData = {
	/**
	 * What will receive your function as parameters
	 */
	input: unknown;
	/**
	 * Expected output after executing the function
	 * with parsed `input` data
	 */
	output: unknown;
};

type TestingDataBundle = {
	data: TestCaseData[];
};
```

### Statement description file

> A basic template `statement-name.md` is autogenerated using the `new-statement` Deno task.

A markdown file that contains the statement description, must be named following the kebab-case
standard

### Unit testing file

> A basic template `statementName.test.ts` is autogenerated using the `new-statement` Deno task.

A TypeScript file that contains all the necessary tests to the statement function, these tests must
use the testing data bundle in order to make the assertions. Must be named following the camelCase
standard and the `*.test.ts` extension.

Anytime you create a new statement with the Deno task help, the basic structure of a testing file
will be autogenerated, it will be very similar to the **TestDataAdapter class** example.

### Bench file

It is probably that you find out different approaches to solve the same statement, it worths
maintain all implementations and bench all of them, just to choose the better one. That's why you
should add a bench file, it must be nameb following the camel case standard and the `*.bench.ts`
extension

### Main function file

> A basic template `statementName.ts` is autogenerated using the `new-statement` Deno task.

A TypeScript file that contains the exported statement function and all its types. Must be named
following the camelCase standard.

## How to prepare your testing data bundle?

There are a lot of cases to cover while working with the platform provided testing data, sometimes
you get a large string of numbers separated with spaces, sometimes you get an object with different
keys and values.

In order to make the parse data collection and testing processes easier, I prepared certain tools
described as follows.

### TestDataAdapter class

This can handle the conversion of that space-separated strings and return a typed array, simply use
like this:

```ts
import { assertEquals } from "std/assert/mod.ts";
import { TestDataAdapter } from "utils/TestDataAdapter/TestDataAdapter.ts";
import testingBundle from "./permuting-two-arrays.data.json" with { type: "json" };

Deno.test("#test", () => {
	// create the adapter instance
	const adapter = new TestDataAdapter(testingBundle);

	// every time you get a space-separated string you can use this config
	// in order to parse the data
	const inputs = adapter.getInputs("compact-string"); // infered return as string[]
	const inputs = adapter.getInputs("compact-number"); // infered return as number[]

	// and for that more specific structures you can prepare the data
	// directly in json file and simply pass to the function
	const inputs = adapter.getInputs<InputType>("ready"); // infered return as InputType[]

	// then you can get the expected results and use them to compare to
	// computed results
	const expected = adapter.getExpectedResults<ExpectedReturnType>("ready");

	const computedResults = inputs.map((input) => testFunction(input));

	assertEquals(computedResults, adapter.getExpectedResults<ExpectedReturnType>("ready"));
});
```

### process-string Deno task

In case you get a complex object you can use this Deno task in order to parse a string and transform
it into an array, automatically copy to clipboard and finally paste it into the *.data.json file

> for linux, make sure to run this command `sudo apt-get install xsel` before use the
> `process-string` deno task

## How to add a new statement

Add a new statement to the project by running the following command:

```bash
deno task new-statement
```

The required data to generate the above described files will be prompted and all of them will be
added to the `src/statements/` directory

## How to test the code

Test a specific statement with
[Deno](https://docs.deno.com/runtime/manual/getting_started/installation) by running the following
command:

```bash
deno test src/nn-statement-name/statementName.test.ts
```

or simply use the currently defined task `test`:

```bash
deno task test
```

This command run all the tests in `src/statements/` directory and watches for changes through all
the existing files, reloading only your current working statement.

## VSCode Deno extension

For better Developer Experience install the
[Deno](https://docs.deno.com/runtime/manual/getting_started/setup_your_environment#visual-studio-code)
extension for Visual Studio Code and run `Deno: Initialize Workspace Configuration` command in the
F1 window. I already ship the `.vscode/settings.json` config file, so, is probably that this step is
not mandatory.
