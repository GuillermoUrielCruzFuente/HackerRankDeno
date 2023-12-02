export const validateName = (name: string) => {
	const trimmedName = name.trim().replace(/\s+/g, " ");

	// This regular expression checks for at
	// least 5 alphanumeric characters and
	// allows for optional spaces and dashes
	const regex = /^([a-zA-Z0-9][-\s]*){5,}$/;

	return regex.test(trimmedName);
};

/**
 * Trim and reduce all repeated spaces to only one
 * @param sentence
 */
export const removeExtraSpaces = (sentence: string) => {
	return sentence.trim().replace(/\s+/g, " ");
};

/**
 * remove leading and trailing hyphens and reduce
 * repeated hyphens to only one
 * @param sentence
 */
export const removeExtraHyphens = (sentence: string) => {
	let str = sentence.replace(/-+/g, "-");

	if (str.startsWith("-")) str = str.substring(1);
	if (str.endsWith("-")) str = str.slice(0, -1);

	return str;
};
