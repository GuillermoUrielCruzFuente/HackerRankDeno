export const aTimeout = (ms: number) => {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
};
