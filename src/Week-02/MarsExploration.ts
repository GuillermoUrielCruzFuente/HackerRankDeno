// A space explorer's ship crashed on Mars!
// They send a series of SOS messages to Earth for help.
// Letters in some of the SOS messages are altered by
// cosmic radiation during transmission. 

// Given the signal received by Earth as a string, s,
// determine how many letters of the SOS message have been changed by radiation.

const marsExploration = (signalsProbablyCorrupted: string): number => {
    let totalCorruptions = 0

    for (let i = 0; i < signalsProbablyCorrupted.length; i = i + 3) {
        const sequence = signalsProbablyCorrupted.slice(i, i + 3)

        const numberOfCorruptionsInSequence = sequence === 'SOS' ? 0 : getCorruptionsInSequence(sequence)
        totalCorruptions += numberOfCorruptionsInSequence
    }

    return totalCorruptions
}


const getCorruptionsInSequence = (corruptedSignal: string) => {
    let counter = 0

    corruptedSignal[0] != 'S' ? counter++ : undefined
    corruptedSignal[1] != 'O' ? counter++ : undefined
    corruptedSignal[2] != 'S' ? counter++ : undefined

    return counter
}

const tests = [
    'SOSTOT',
    'SOSETDSDOSOSASDARSOS2',
    'SOSSOSSOSSOSSOSOIUKHK'
]

tests.forEach(test => {
    console.log(marsExploration(test))
})