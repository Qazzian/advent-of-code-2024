const first = (input: string) => {
	const reportData: number[][] = splitInput(input);
	// const unsafeReports: number[][] = [];

	const safeReportCount = reportData.reduce((runningCount, reportLine) => {
		if ( isReportSafe(reportLine)) {
			return runningCount + 1
		}
		// unsafeReports.push(reportLine);
		return runningCount;
	}, 0);

	// console.log(JSON.stringify(unsafeReports));
	return safeReportCount;
};

const expectedFirstSolution = 2;

const second = (input: string) => {
	const reportData: number[][] = splitInput(input);
	const unsafeReports: number[][] = [];

	const safeReportCount =  reportData.reduce((runningCount, reportLine) => {
		if ( isReportSafe(reportLine, true)) {
			return runningCount + 1
		}
		unsafeReports.push(reportLine);
		return runningCount;
	}, 0);

	console.log(JSON.stringify(unsafeReports));
	return safeReportCount;
};

const expectedSecondSolution = 4;

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

export function isReportSafe(reportData: number[], useDampen:boolean = false): boolean {
	const hasIncreased = isIncreasing(reportData[0], reportData[1]);
	let currentIndex = 0;

	const doDampen = (index: number) => {
		return useDampen && (dampen(reportData, index) || dampen(reportData, index+1));
	}

	while (currentIndex < reportData.length - 1) {
		const diff = reportData[currentIndex] - reportData[currentIndex + 1];
		if (hasIncreased && !isIncreasing(reportData[currentIndex], reportData[currentIndex + 1])) {
			return doDampen(currentIndex);
		}
		if (!hasIncreased && isIncreasing(reportData[currentIndex], reportData[currentIndex + 1])) {
			return doDampen(currentIndex);
		}
		if (Math.abs(diff) > 3 || diff === 0) {
			return doDampen(currentIndex);
		}
		currentIndex++;
	}

	return true;
}

function dampen(reportData: number[], indexToRemove: number): boolean {
	const newReport = reportData.slice();
	newReport.splice(indexToRemove, 1);
	return isReportSafe(newReport);
}

function isIncreasing(num1:number, num2: number) {
	return num1 < num2;
}