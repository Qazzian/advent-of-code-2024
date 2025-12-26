const first = (input: string) => {
	const ranges = input.split(',');
	let total = 0;
	for (const range of ranges) {
		const [first, second] = range.split('-');
		total += testRange(parseInt(first), parseInt(second), isInvalid);
	}

	return total;
};

const expectedFirstSolution = 1227775554;

const second = (input: string) => {
	const ranges = input.split(',');
	let total = 0;
	for (const range of ranges) {
		const [first, second] = range.split('-');
		total += testRange(parseInt(first), parseInt(second), isInValidPt2);
	}

	return total;
};

const expectedSecondSolution = 4174379265;

export { first, expectedFirstSolution, second, expectedSecondSolution };

export function testRange(
	start: number,
	end: number,
	testFunc: (id: number) => boolean
) {
	let total = 0;
	for (let i = start; i <= end; i++) {
		if (testFunc(i)) {
			// console.log('+', i);
			total += i;
		}
	}
	return total;
}

export function isInvalid(id: number) {
	const str = id.toString();
	if (str.length === 1) {
		return false;
	}

	const p1 = str.slice(0, str.length / 2);
	const p2 = str.slice(str.length / 2);

	return p1 === p2;
}

export function isInValidPt2(id: number) {
	const str = id.toString();
	if (str.length === 1) {
		return false;
	}
	const halfLength = Math.ceil(str.length / 2);

	for (let partLength = 1; partLength <= halfLength; partLength++) {
		const partResult = isValidForPart(str, partLength);
		if (!partResult) {
			return true;
		}
	}
	return false;
}

export function isValidForPart(str: string, partLength: number): boolean {
	if (partLength * 2 > str.length) {
		return true;
	}
	const pt1 = str.slice(0, partLength);
	for (let i = partLength; i < str.length; i += partLength) {
		const pt2 = str.slice(i, i + partLength);
		if (pt1 !== pt2) {
			return true;
		}
	}
	return false;
}
