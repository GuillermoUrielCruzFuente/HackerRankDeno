// A pangram is a string that contains every letter of the alphabet.
// Given a sentence determine whether it is a pangram in the English alphabet.
// Ignore case. Return either pangram or not pangram as appropriate.

type TextType = 'pangram' | 'not pangram'
type TableItem = {
    [key: string]: number
}

const pangrams = (text: string): TextType => {
    let newLetterCounter = 0
    text = text.toLocaleLowerCase()
    let arrayPangram = text.split('')

    let dictionary: TableItem = {}

    arrayPangram.forEach((letter: string, index: number) => {
        if (letter in dictionary) {
            dictionary[letter]++
        }
        else {
            if (letter.match(/[a-z]/gi)) {
                newLetterCounter++
                dictionary[letter] = 1
            }
        }

        if (newLetterCounter === 26) {
            return 'pangram'
        }
    })

    if (newLetterCounter === 26) {
        return 'pangram'
    } else {
        return 'not pangram'
    }
}

console.log(
    pangrams('JavaScript already has a typeof operator you can use in an expression context:'),
)

console.log(
    pangrams('While Suez sailors wax parquet decks, Afghan jews vomit jauntily abaft.')
)