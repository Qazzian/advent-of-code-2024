const first = (input: string) => {
	const ranges = input.split(',');
	let total = 0;
	for (const range of ranges) {
		const [first, second] = range.split('-');
		total += testRange(parseInt(first), parseInt(second));
	}

	return total;
};

const expectedFirstSolution = 1227775554;

const second = (input: string) => {
	return 'solution 2';
};

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };

export function testRange(start: number, end: number) {
	let total = 0;
	for (let i = start; i <= end; i++) {
		if (isInvalid(i)) {
			total += i;
		}
	}
	return total;
}

export function isInvalid(id: number) {
	const str = id.toString();
	const p1 = str.slice(0, str.length / 2);
	const p2 = str.slice(str.length / 2);

	return p1 === p2;
}
