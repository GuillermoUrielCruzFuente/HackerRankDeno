export class NameAdapter {
	#name: string;

	constructor(name: string) {
		this.#name = name;
	}

	get kebabCase() {
		return this.#lowerCaseNameSegments.join("-");
	}

	get camelCase() {
		const nameSegments = this.#lowerCaseNameSegments;

		const firstSegment = nameSegments.shift();

		const capitalizedSegments = nameSegments
			.map((segment) => this.#capitalize(segment))
			.join("");

		return firstSegment + capitalizedSegments;
	}

	get pascalCase() {
		return this.#lowerCaseNameSegments
			.map((segment) => this.#capitalize(segment))
			.join("");
	}

	get capitalizedSentence() {
		return this.#lowerCaseNameSegments
			.map((segment) => this.#capitalize(segment))
			.join(" ");
	}

	get #lowerCaseNameSegments() {
		const bySpacesAndDashes = /[- ]+/;
		const segments = this.#name
			.split(bySpacesAndDashes)
			.map((segment) => segment.toLowerCase());

		return segments;
	}

	#capitalize(word: string) {
		const searchFirstLetter = /^\w/;

		return word.replace(
			searchFirstLetter,
			(firstLetter) => firstLetter.toUpperCase(),
		);
	}
}
