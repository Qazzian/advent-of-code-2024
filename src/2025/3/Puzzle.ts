const first = (input: string) => {
	const banks = input.split('\n');
	let total = 0;
	for (const bank of banks) {
		total += maxJoltage(bank);
	}

	return total;
};

const expectedFirstSolution = 357;

const second = (input: string) => {
	return 'solution 2';
};

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };

export function maxJoltage(bank: string) {
	const batteries = bank.split('').map((a) => parseInt(a));
	const [firstPos, firstMax] = maxDigit(batteries.slice(0, -1));
	const [, secondMax] = maxDigit(batteries.slice(firstPos + 1));

	return parseInt([firstMax, secondMax].join(''));
}

export function maxDigit(batteries: number[]) {
	let pos = 0;
	let maxValue = 0;
	for (let i = 0; i < batteries.length; i++) {
		if (batteries[i] > maxValue) {
			maxValue = batteries[i];
			pos = i;
		}
	}
	return [pos, maxValue];
}
