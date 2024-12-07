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

	test('dampen', () => {
		const data = {
			'7 6 4 2 1': true,
			'1 2 7 8 9': false,
			'9 7 6 2 1': false,
			'1 3 2 4 5': true,
			'8 6 4 4 1': true,
			'1 3 6 7 9': true,
		};

		for (const [key, value] of Object.entries(data)) {
			const input = splitReport(key);
			expect(isReportSafe(input, true)).toBe(value);
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