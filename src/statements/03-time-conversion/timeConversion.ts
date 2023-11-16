export const timeConversion = (time: string) => {
	const hoursStr = time.slice(0, 2);
	const hours = parseInt(hoursStr);
	const minutesAndSeconds = time.slice(2, time.length - 2);
	const isTwelve = hours === 12;

	const hourIndicator = time.slice(time.length - 2, time.length);

	if (hourIndicator === "AM") {
		const militaryHour = isTwelve ? "00" : hoursStr;
		return `${militaryHour}${minutesAndSeconds}`;
	}

	if (hourIndicator === "PM") {
		const militaryHour = isTwelve ? hours : hours + 12;
		return `${militaryHour}${minutesAndSeconds}`;
	}
};
