/**
 * Checks for at least 5 alphanumeric characters and allows for
 * single optional internal spaces and hyphens
 *
 * @param name string to validate
 * @returns whether the current name is valid or not
 */
export const validateName = (name: string): boolean => {
	const regex = /^([a-zA-Z0-9]([- ]?[a-zA-Z0-9])*){5,}$/;
	return regex.test(name);
};

/**
 * Trim and reduce all repeated blank spaces to only one
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
