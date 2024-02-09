export const marsExploration = (signal: string): number => {
	let totalCorruptions = 0;

	for (let i = 0; i < signal.length; i = i + 3) {
		const sequence = signal.slice(i, i + 3);
		totalCorruptions += getCorruptionsInSequence(sequence);
	}

	return totalCorruptions;
};

const getCorruptionsInSequence = (corruptedSignal: string) => {
	let counter = 0;

	corruptedSignal[0] != "S" && counter++;
	corruptedSignal[1] != "O" && counter++;
	corruptedSignal[2] != "S" && counter++;

	return counter;
};
