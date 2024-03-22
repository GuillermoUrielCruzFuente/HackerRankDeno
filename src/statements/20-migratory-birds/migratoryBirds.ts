type BirdDictionary = {
	[key: number]: number;
};

export const migratoryBirds = (birds: number[]) => {
	const dict: BirdDictionary = {};

	for (let i = 0; i < birds.length; i++) {
		const bird = birds[i];

		if (bird in dict) {
			dict[bird] += 1;
		} else {
			dict[bird] = 1;
		}
	}

	let maxSightings: number[] = [];
	let currentMaxSightings = 0;

	for (const [birdID, sightings] of Object.entries(dict)) {
		if (sightings > currentMaxSightings) {
			currentMaxSightings = sightings;
			maxSightings = [];
			maxSightings.push(+birdID);
		} else if (sightings === currentMaxSightings) {
			maxSightings.push(+birdID);
		}
	}

	if (maxSightings.length > 1) {
		return Math.min(...maxSightings);
	}

	return maxSightings[0];
};
