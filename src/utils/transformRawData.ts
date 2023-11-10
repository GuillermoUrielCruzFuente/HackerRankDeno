/**
 * Parse the rawData that provides HackerRank platform, a string with
 * all the values separated with spaces
 *
 * @param rawData string sequence that contains all the `T` type
 * values separated by spaces
 *
 * @returns an array of `T` type values.
 * For integers it checks the value with `parseInt` fn and push
 * that value to the final array if `Number.isInteger(T)`
 * returns true, otherwise, will push the value if it is not
 * an empty string
 */
export const parseRawData = <T>(rawData: string): T[] => {
	const strData = rawData.split(" ");
	const finalData: T[] = [];

	for (const str of strData) {
		const int = parseInt(str);

		if (Number.isInteger(int)) {
			finalData.push(int as T);
		} else if (str !== "") {
			finalData.push(str as T);
		}
	}

	return finalData;
};
