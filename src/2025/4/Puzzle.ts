import Grid from '../../utils/Grid.js';

const first = (input: string) => {
	const warehouse = new Grid<string>(
		input.split('\n').map((line) => line.split(''))
	);
	let totalCount = 0;
	warehouse.forEach((value, x, y) => {
		if (value === '@') {
			let aroundCount = 0;
			warehouse.around([x, y], (value) => {
				if (value === '@') {
					aroundCount += 1;
				}
			});
			if (aroundCount < 4) {
				totalCount += 1;
			}
		}
	});

	return totalCount;
};

const expectedFirstSolution = 13;

const second = (input: string) => {
	return 'solution 2';
};

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };
