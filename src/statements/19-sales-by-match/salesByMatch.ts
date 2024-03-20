type Dict = {
	[key: number]: number;
};

export const salesByMatch = (socks: number[]): number => {
	const socksDict: Dict = {};

	for (let i = 0; i < socks.length; i++) {
		const sock = socks[i];
		sock in socksDict ? socksDict[sock] += 1 : socksDict[sock] = 1;
	}

	const pairs = Object.values(socksDict).reduce((acc, currentValue) => {
		const isPair = currentValue % 2 === 0;
		const newPairs = isPair ? currentValue / 2 : (currentValue - 1) / 2;
		return acc + newPairs;
	}, 0);

	return pairs;
};

export const sales = (socks: number[]) => {
	const { length } = socks;
	let pairCounter = 0;

	for (let i = 0; i < length; i++) {
		const sock = socks[i];

		for (let j = i + 1; j < length; j++) {
			const anotherSock = socks[j];

			if (sock === anotherSock) {
				pairCounter++;
				socks[j] = NaN;
				break;
			}
		}
	}

	return pairCounter;
};
