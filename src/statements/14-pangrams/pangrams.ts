type TextType = "pangram" | "not pangram";
type TableItem = {
	[key: string]: boolean;
};

const TOTAL_ALPHABET_LETTERS = 26;

const letterValidator = /[a-z]/;

export const pangrams = (text: string): TextType => {
	let newLetterCounter = 0;
	text = text.toLowerCase();

	const dictionary: TableItem = {};

	for (let i = 0; i < text.length; i++) {
		const letter = text[i];

		if (!letterValidator.test(letter)) continue;

		if (!(letter in dictionary)) {
			newLetterCounter++;
			dictionary[letter] = true;
		}
	}

	return newLetterCounter === TOTAL_ALPHABET_LETTERS ? "pangram" : "not pangram";
};
