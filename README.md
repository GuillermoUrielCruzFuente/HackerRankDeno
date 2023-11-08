# Hacker Rank - 3 months preparation kit

Hacker Rank code playground is slow and I don't really like, so, I decided to
work locally and execute my code with Deno which has built in TypeScript
support, and a great ecosystem that helps to unit test, format and bench code in
a really easy way.

## Project structure

Every statement is at `src/statements/` directory, each of them must have:

- statement-name.data.json
  - Must contains the necessary input an output data in order to test the code.
  - Typing standards -> *.data.json must contains
    - input: string of values of the same type separated by spaces
    - output: - string of values of the same type separated by spaces - array of
      values of the same type

- statement-name.md
  - Must contain the statement description.

- StatementName.test.ts
  - Must contain the all the tests to the generated function.

- StatementName.ts
  - This file must contain the function definition and all its types.

## How to add a new statement

Add a new statement to the project by running the following command:

```bash
deno task new-statement
```

The required data to generate the above described files will be prompted and all
of them will be added to the `src/statements/` directory

## How to test the code

Test the statements with
[Deno](https://docs.deno.com/runtime/manual/getting_started/installation) by
running the following command:

```bash
deno test src/StatementName.test.ts
```

or simply use the currently defined task `test`:

```bash
deno task test
```

This command watchs for changes in all statements directory
`src/statements/*/*.ts` TS files, and run all the existing tests.

## VSCode Deno extension

For better Developer Experience install the
[Deno](https://docs.deno.com/runtime/manual/getting_started/setup_your_environment#visual-studio-code)
extension for Visual Studio Code and run
`Deno: Initialize Workspace Configuration` command in the F1 window. I already
ship the `.vscode/settings.json` config file, so, is probably that this step is
not mandatory.
