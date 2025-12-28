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
	const banks = input.split('\n');
	let total = 0;
	for (const bank of banks) {
		total += maxJoltage(bank, 12);
	}

	return total;
};

const expectedSecondSolution = 3121910778619;

export { first, expectedFirstSolution, second, expectedSecondSolution };

type PosValue = [number, number];

export function maxJoltage(bank: string, batteryCount: number = 2) {
	const batteries = bank.split('').map((a) => parseInt(a));
	const wantedBatteries: PosValue[] = [];
	let startPos = 0;
	for (let i = batteryCount - 1; i >= 0; i--) {
		const endPos = bank.length - i;
		const bestPos = maxDigit(batteries.slice(0, endPos), startPos);
		// console.log(bank, startPos, endPos, bestPos);
		startPos = bestPos[0] + 1;
		wantedBatteries.push(bestPos);
	}

	return parseInt(
		wantedBatteries.reduce((total: string, [, value]) => (total += value), '')
	);
}

export function maxDigit(batteries: number[], start = 0): PosValue {
	let pos = start;
	let maxValue = 0;
	for (let i = start; i < batteries.length; i++) {
		if (batteries[i] > maxValue) {
			maxValue = batteries[i];
			pos = i;
		}
	}
	return [pos, maxValue];
}
