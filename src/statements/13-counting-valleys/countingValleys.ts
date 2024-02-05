export const countingValleys = (stepsRegister: string): number => {
	// hikes always start at sea level
	let currentAltitude = 0;
	let counterValleys = 0;
	let hasEnteredAValley = false;

	for (let stepNumber = 0; stepNumber < stepsRegister.length; stepNumber++) {
		const step = stepsRegister[stepNumber];

		switch (step) {
			case "D":
				currentAltitude--;
				break;
			case "U":
				currentAltitude++;
				break;
			default:
				throw new Error(`[${stepNumber}]: ${step}, is not a valid step chatacter`);
		}

		if (currentAltitude === -1) {
			hasEnteredAValley = true;
		}

		if (currentAltitude === 0 && hasEnteredAValley) {
			hasEnteredAValley = false;
			counterValleys++;
		}
	}

	return counterValleys;
};
