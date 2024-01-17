const computeNextMultipleOf5 = (n: number) => {
	while (n % 5 != 0) {
		n++;
	}

	return n;
};

export const gradingStudents = (grades: number[]): number[] => {
	return grades.map((grade) => {
		if (grade < 38) return grade;

		const nextMultiple = computeNextMultipleOf5(grade);

		if (nextMultiple - grade < 3) return nextMultiple;

		return grade;
	});
};
