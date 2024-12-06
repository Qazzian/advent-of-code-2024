import { readFile } from 'node:fs/promises';
import * as path from 'node:path';
import {describe, expect, test} from 'vitest';

import { first, expectedFirstSolution, isReportSafe, splitInput, splitReport } from './Puzzle.js';

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
});


async function readTestFile(num: number = 1) {
	const inputFile = path.join(__dirname, `example-test-${num}.txt`);
	return await readFile(inputFile, 'utf-8');
}