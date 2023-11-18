/**
 * @param max the maximum possible value
 * @returns random integer between 0 and max value
 */
export const getRandomInt = (max = 100) => Math.ceil(Math.random() * max);

/**
 * @param length final random array length
 * @returns an array of specified length
 * filled with random values between 1 and 1000
 */
export const createRandomArray = (length = 1000) => {
	const array: number[] = [];

	for (let i = 0; i < length; i++) {
		array.push(getRandomInt());
	}

	return array;
};
