/**
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.
 */
export const diagonalDifference = (matrix: number[][]) => {
	const size = matrix[0].length;
	let primarySum = 0;
	let secondarySum = 0;

	for (let i = 0; i < size; i++) {
		primarySum += matrix[i][i];
		secondarySum += matrix[i][size - 1 - i];
	}

	return Math.abs(primarySum - secondarySum);
};
