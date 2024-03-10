import { writeText } from "https://deno.land/x/copy_paste@v1.1.3/mod.ts";

const rawString = prompt("raw string: ", "");

const array = "[" + rawString?.split(" ").join() + "]";

await writeText(array);
