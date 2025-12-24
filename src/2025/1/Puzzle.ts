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
		// console.log(dir, count, currentPos, password);
	}

	return password;
};

const expectedFirstSolution = 3;

const second = (input: string) => {
	const startPos = 50;
	const modLimit = 100;
	const lines = input.split('\n');
	let currentPos = startPos;
	let password = 0;

	for (const line of lines) {
		const { count, nextPos } = countPasses(currentPos, line, modLimit);
		password += count;
		// console.log(currentPos, line, nextPos, password);
		currentPos = nextPos % modLimit;
		if (currentPos < 0) {
			currentPos = modLimit + currentPos;
		}
	}

	return password;
};

const expectedSecondSolution = 6;

interface CountResult {
	count: number;
	nextPos: number;
}

export function countPasses(
	startPos: number,
	turn: string,
	limit: number
): CountResult {
	const dir = turn.slice(0, 1);
	const count = parseInt(turn.slice(1));

	const fullRotations = Math.floor(count / limit);
	const partalCount = count - fullRotations * limit;

	if (dir === 'L') {
		const nextPos = startPos - partalCount;
		if (startPos > 0 && nextPos <= 0) {
			return { count: fullRotations + 1, nextPos: nextPos };
		}
		return { count: fullRotations, nextPos: nextPos };
	} else {
		const nextPos = startPos + partalCount;
		if (startPos < limit && nextPos >= limit) {
			return { count: fullRotations + 1, nextPos: nextPos };
		}
		return { count: fullRotations, nextPos: nextPos };
	}
}

export { first, expectedFirstSolution, second, expectedSecondSolution };
