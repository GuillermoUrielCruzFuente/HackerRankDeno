export const maximumPerimeterTriangle = (sticks: number[]): number[] => {
	let maxtriangle: number[] = [-1];

	// by sorting the sticks array in descending order
	// we got the largest available sides to validate if
	// that combination forms a triangle, otherwise try with the
	// next stick until find a valid combination.
	sticks.sort((a, b) => b - a);

	const isTriangle = (a: number, b: number, c: number) => {
		return (-a + b + c) * (a - b + c) * (a + b - c) > 0;
	};

	for (let i = 0; i < sticks.length - 2; i++) {
		const a = sticks[i];
		const b = sticks[i + 1];
		const c = sticks[i + 2];

		if (isTriangle(c, b, a)) {
			maxtriangle = [c, b, a];
			break;
		}
	}

	return maxtriangle;
};
