/**
 * HackerLand University has the following grading policy: 
 * - Every student receives a grade in the inclusive range from 0 to 100.
 * - Any  less than  is a failing grade.
 * Sam is a professor at the university and likes to round each student's  according to these rules:
 * - If the difference between the  and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
 * - If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
 * @param grades array of student notes
 * @returns the rounded scores
 */
const gradingStudents = (grades: Array<number>): Array<number> => {

    let roundedGrades: Array<number> = []

    grades.forEach((grade: number) => {
        let nextMultiple = nextMultipleOfFive(grade)
        let newGrade: number

        if (nextMultiple - grade < 3 && grade >= 38) {
            newGrade = nextMultiple
        }
        else {
            newGrade = grade
        }

        roundedGrades.push(newGrade)
    })

    return roundedGrades
}

const nextMultipleOfFive = (n: number) => {
    while (n % 5 != 0) {
        n++
    }
    return n
}


const test = [
    73,
    67,
    38,
    33
]
console.log(gradingStudents(test))