import getChocolateSlices from "./SubarrayDivision2.ts";

type TestCase = {
    chocolateBar: Array<number>,
    birthDay: number,
    birthMonth: number
}

const testCases: Array<TestCase> = [
    {
        chocolateBar: [2, 2, 1, 3, 2],
        birthDay: 4,
        birthMonth: 2
    },
    {
        chocolateBar: [2, 3, 1, 3, 4, 0, 2, 2, 1],
        birthDay: 4,
        birthMonth: 2
    },
    {
        chocolateBar: [1, 2, 1, 3, 2],
        birthDay: 3,
        birthMonth: 2
    },
    {
        chocolateBar: [4],
        birthDay: 4,
        birthMonth: 1
    }
]

testCases.forEach((test: TestCase) => {
    console.log(
        getChocolateSlices(
            test.chocolateBar,
            test.birthDay,
            test.birthMonth
        )
    )
})