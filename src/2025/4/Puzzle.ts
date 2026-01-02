import Grid from '../../utils/Grid.js';
import { Vector } from '../../utils/Vector.js';

const first = (input: string) => {
	const warehouse = new Grid<string>(
		input.split('\n').map((line) => line.split(''))
	);
	let totalCount = 0;
	warehouse.forEach((value, x, y) => {
		if (canRemove(value, [x, y], warehouse)) {
			totalCount += 1;
		}
	});

	return totalCount;
};

const expectedFirstSolution = 13;

const second = (input: string) => {
	const warehouse = new Grid<string>(
		input.split('\n').map((line) => line.split(''))
	);
	let totalCount = 0;
	let hasChanged = false;
	do {
		hasChanged = false;
		warehouse.forEach((value, x, y) => {
			if (canRemove(value, [x, y], warehouse)) {
				totalCount += 1;
				warehouse.set([x, y], '');
				hasChanged = true;
			}
		});
	} while (hasChanged);

	return totalCount;
};

const expectedSecondSolution = 43;

export { first, expectedFirstSolution, second, expectedSecondSolution };

export function canRemove(
	value: string,
	pos: Vector,
	warehouse: Grid<string>
): boolean {
	if (value === '@') {
		let aroundCount = 0;
		warehouse.around(pos, (value) => {
			if (value === '@') {
				aroundCount += 1;
			}
		});
		if (aroundCount < 4) {
			return true;
		}
	}
	return false;
}
