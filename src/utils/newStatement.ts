import { StatementTemplater } from "utils/templates/Templater.ts";

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
