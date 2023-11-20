import { StatementTemplater } from "utils/templates/Templater.ts";

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

const readableName = prompt("", "")!;

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
