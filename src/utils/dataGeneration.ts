/**
 * @param max
 * @returns
 */
export const getRandomInt = (max = 100) => Math.ceil(Math.random() * max);

/**
 * @param length final random length
 * @returns an array of specified length
 */
export const createRandomArray = (length = 1000) => {
	const array: number[] = [];

	for (let i = 0; i < length; i++) {
		array.push(getRandomInt());
	}

	return array;
};
