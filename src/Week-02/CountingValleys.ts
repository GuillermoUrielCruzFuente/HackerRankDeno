/**
 * An avid hiker keeps meticulous records of their hikes.
 * During the last hike that took exactly steps steps,
 * for every step it was noted if it was an uphill, U, or a downhill, D step.
 * Hikes always start and end at sea level, and each step up or down
 * represents a 1 unit change in altitude. We define the following terms:
 * 
 *  - A mountain is a sequence of consecutive steps above sea level,
 *  starting with a step up from sea level and ending with a step down to sea level.
 * 
 *  - A valley is a sequence of consecutive steps below sea level,
 *  starting with a step down from sea level and ending with a step up to sea level.
 * 
 * 
 * Given the sequence of up and down steps during a hike,
 * find and print the number of valleys walked through.
 */
const countingValleys = (totalSteps: number, stepsRegister: string): number => {
    // hikes always start at sea level
    let currentAltitude = 0
    let counterValleys = 0
    let hasEnteredAValley = false

    for (let stepNumber = 0; stepNumber < totalSteps; stepNumber++) {
        const step = stepsRegister[stepNumber];

        switch (step) {
            case 'D':
                currentAltitude--
                break
            case 'U':
                currentAltitude++
                break
            default: throw new Error(`step in {index ${stepNumber}: [${step}]} is not a valid step chatacter`)
        }

        if (currentAltitude === -1) {
            hasEnteredAValley = true
        }

        if (currentAltitude === 0 && hasEnteredAValley) {
            hasEnteredAValley = false
            counterValleys++
        }
    }

    return counterValleys
}

const tests = [
    'UDDDUDUU',
    'DDUUDDUDUUUD',
    'DUDUUDUUUUUUDDDDDUDDUUUDUUUDDDUUUDDUDDDDUDDDDDUUDUDUDUDDDDUUDDUDDUUUUDDUUUUDUUDUUDUUUUDDDUDDUUUUDUDDDUUDUDUUDDUUUDUDDDUDUDUDUDUUUDUUUUUUDUDDDDDUDUDDDDUUUUUDUDUUUUUUUUDDDUUDUUDUDUDDDDDUDDDUDUUUDUDDDUDUUDUUDDDDDDDUDUDUUUDUDDUDUUDUDDDUUUDUDDDDUDDUDDUDUDUUDUDDDUDUUUDUUDUUUUUUUDUUUUUUUDDDDDUDDDUUUDDDUDDDUDDUUDDUUUDUUDDDUDUUDUUUDDUDDDDUUUUUUDUDUUDDDDUDUDDUUUDUDUUDDUUDDDUUDUUUUUDDUUDDDDUUUDUDUUDDUUDDUUDUDDDUDUDUDDUUDUDDUDUDDUUUDUDDUDDUUDUUDUDDDDDDDDDUDDUUDDUUUUDDUDUUDUUDUUDDDDUUUDUDDDDUDDUUDUDUDUUDDUUDUDUDDDDDUUUDDDDUDDDUUDDUUDDUUUDUDDDUDDDDDUUDUUUDDUDDDDUUUDDDDUUDDUUUDUUUDDUDUUUDUDDUUUDDDDDDDUUDDUDDUUUUUUDDDDUDDUDDUDDUDDDDDUUDDUDDDUDDUDUDDDUDUDUUDDUUDDDDUUDDUUUDUUDDDDDDUDUDDUDUUDDUDDDUUUUDDUUDUDDDDUUUDUUUUDDUDUUUDDUDUUUUUUDUUDDDDDUDDUDUDDDUDDDDUDUUUDUDUUDDUDDDUDUUDDDDDDDDUDUUDUDDUDDUDUUUDDDUDUDDUUUDUDUDDDUDDUDUUUDUDDDDDUDDDDDDUDUUUUDDUDDDUDDDUDUDUUUDDUDDUDDUUDDUDUDUDUUUUUDUUDDUUDUUDUUUDUDUDDUDDDUUDDDDUUDDUUUUDUUDUUUDDDDDUDDDDDUUUDDUUUDUUUDUUDUUUDUDUUDUDDUUUUUDUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU'
]

tests.forEach(test => console.log(countingValleys(test.length, test)))
