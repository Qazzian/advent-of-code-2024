import { readFile } from 'node:fs/promises';
import * as path from 'node:path';
import {describe, expect, test} from 'vitest';

import {
	first,
	expectedFirstSolution,
	isReportSafe,
	splitInput,
	splitReport,
	second,
	expectedSecondSolution,
} from './Puzzle.js';

describe('Day 2', () => {
	test('split input data', () => {
		const testData = '1 2\n3 4';
		expect(splitInput(testData)).toEqual([[1, 2], [3, 4]]);
	})

	test('with increasing numbers', () => {
		const input = splitReport('1 3 6 7 9');
		expect(isReportSafe(input)).toBe(true);
	});

	test('with decreasing numbers', () => {
		const input = splitReport('7 6 4 2 1');
		expect(isReportSafe(input)).toBe(true);
	});

	test('with duplicate numbers', () => {
		const input = splitReport('8 6 4 4 1');
		expect(isReportSafe(input)).toBe(false);
	});


	test('first solution test', async () => {
		const input = await readTestFile();
		expect(first(input)).toBe(expectedFirstSolution);
	});

	describe('dampen', () => {
		const data = {
			'7 6 4 2 1': true,
			'1 2 7 8 9': false,
			'9 7 6 2 1': false,
			'1 3 2 4 5': true,
			'8 6 4 4 1': true,
			'1 3 6 7 9': true,
			'73 75 73 74 75 75': false,
			'20 17 18 21 23 25': true,
			'1 2 3 4': true,
			'1 3 2 4': true,
			'1 3 2 6 4': false,
		};

		for (const [key, value] of Object.entries(data)) {
			test(key, () =>{
				const input = splitReport(key);
				expect(isReportSafe(input, true)).toBe(value);
			});
		}
	});

	test('second solution test', async () => {
		const input = await readTestFile();
		expect(second(input)).toBe(expectedSecondSolution);
	});
});


async function readTestFile(num: number = 1) {
	const inputFile = path.join(__dirname, `example-test-${num}.txt`);
	return await readFile(inputFile, 'utf-8');
}

const unsafeReports = [
	[3, 6, 7, 9, 11, 8],
	[21, 24, 25, 26, 29, 30, 32, 32],
	[29, 32, 33, 34, 35, 37, 38, 42],
	[54, 55, 57, 58, 60, 61, 63, 70],
	[59, 61, 60, 63, 65, 68, 71],
	[43, 44, 45, 44, 46, 44],
	[73, 75, 73, 74, 75, 75],
	[82, 85, 82, 85, 89],
	[79, 82, 84, 83, 85, 92],
];

describe('day 2 part 2', ()=>{
	test('report 1', () => {
		const reallyUnsafeReports: number[][] = [];
		for (let report of unsafeReports) {
			if (!isReportSafe(report, true)) {
				reallyUnsafeReports.push(report);
			}
		}
		console.log('unsafe count: ', reallyUnsafeReports.length, 'out of', unsafeReports.length);
		console.log(JSON.stringify(reallyUnsafeReports));
	});
});