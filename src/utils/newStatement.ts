import { StatementScaffolder } from "utils/templates/StatementScaffolder.ts";
import { validateName } from "utils/validateName.ts";

console.clear();

const messages = [
	{
		content: "- Readable format, include spaces and dashes",
		color: "red",
	},
	{
		content: "- An empty name will abort this action",
		color: "red",
	},
	{
		content: "Statement name:",
		color: "chartreuse",
	},
];

messages.forEach((message) => {
	console.log(
		`%c${message.content}`,
		`color: ${message.color}; font-weight: bold`,
	);
});

const name = prompt("", "")!;

const isValidName = validateName(name);

if (isValidName) {
	new StatementScaffolder({ name }).generateScaffold();
} else {
	const errorReason = name.length === 0 ? "Empty name" : "Not valid name";

	console.log(
		"%cName must be at least 5 alphanumeric chars length and optionally spaces and dashes",
		"color: yellow; font-weight: bold;",
	);

	console.log(
		`%cNo new statement was generated, reason -> [ ${errorReason} ]`,
		"color: red; font-weight: bold;",
	);
}
