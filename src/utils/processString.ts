import { writeText } from "https://deno.land/x/copy_paste@v1.1.3/mod.ts";
import { removeExtraSpaces } from "utils/validateName.ts";

console.clear();

console.log(
	`%cNote: repeated spaces will be reduced to only one!`,
	`color: red; font-weight: bold`,
);

const rawString = prompt("raw string: ", "")!;
const stringArray = removeExtraSpaces(rawString).split(" ");
const array = "[" + stringArray.join() + "]";
await writeText(array);

console.log(
	`%c - Array copied to clipboard, final length: ${stringArray.length}`,
	`color: violet; font-weight: bold`,
);
