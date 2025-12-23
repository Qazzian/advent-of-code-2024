const first = (input: string) => {
	const startPos = 50;
	const modLimit = 100;
	const lines = input.split('\n');
	let currentPos = startPos;
	let password = 0;

	for (const line of lines) {
		const dir = line.slice(0, 1);
		const count = parseInt(line.slice(1));

		const nextPos = dir === 'L' ? currentPos - count : currentPos + count;
		currentPos = nextPos % modLimit;
		if (currentPos === 0) {
			password++;
		}
		console.log(dir, count, currentPos, password);
	}

	return password;
};

const expectedFirstSolution = 3;

const second = (input: string) => {
	return 'solution 2';
};

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };
