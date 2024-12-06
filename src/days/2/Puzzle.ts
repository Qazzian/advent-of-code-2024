const first = (input: string) => {
	const reportData: number[][] = splitInput(input);

	return reportData.reduce((safeReportCount, reportLine) => {
		if ( isReportSafe(reportLine)) {
			return safeReportCount + 1
		}
		return safeReportCount;
	}, 0);
};

const expectedFirstSolution = 2;

const second = (input: string) => {
	return 'solution 2';
};

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };


export function splitInput(input: string): number[][] {
	const lines = input.split('\n');
	return lines.map((line) => splitReport(line));
}

export function splitReport(inputLine: string) {
	const trimmed = inputLine.trim();
	const split = trimmed.split(' ');
	return split.map((s) => parseInt(s));
}

export function isReportSafe(reportData: number[]): boolean {
	const hasIncreased = isIncreasing(reportData[0], reportData[1]);
	let currentIndex = 0;

	while (currentIndex < reportData.length - 1) {
		const diff = reportData[currentIndex] - reportData[currentIndex + 1];
		if (hasIncreased && !isIncreasing(reportData[currentIndex], reportData[currentIndex + 1])) {
			return false;
		}
		if (!hasIncreased && isIncreasing(reportData[currentIndex], reportData[currentIndex + 1])) {
			return false;
		}
		if (Math.abs(diff) > 3 || diff === 0) {
			return false;
		}
		currentIndex++;
	}

	return true;
}

function isIncreasing(num1:number, num2: number) {
	return num1 < num2;
}