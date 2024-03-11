export type SubarrayDivision2Params = {
	chocolateBar: Array<number>;
	birthDay: number;
	birthMonth: number;
};

export const subarrayDivision2 = (
	{ chocolateBar, birthDay, birthMonth }: SubarrayDivision2Params,
) => {
	let numberOfPosibleSlices = 0;

	for (let i = 0; i < chocolateBar.length; i++) {
		const sliceStep = i + birthMonth - 1;
		const thereIsEnoughChocolate = sliceStep <= chocolateBar.length - 1;

		if (thereIsEnoughChocolate) {
			let chocolateSquaresAccumulator = 0;

			for (let j = i; j <= sliceStep; j++) {
				chocolateSquaresAccumulator += chocolateBar[j];
			}

			numberOfPosibleSlices += chocolateSquaresAccumulator === birthDay ? 1 : 0;
		} else {
			break;
		}
	}

	return numberOfPosibleSlices;
};
