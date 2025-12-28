import * as path from 'path';
import {
	first,
	expectedFirstSolution,
	second,
	expectedSecondSolution,
	maxJoltage,
	maxDigit,
} from './Puzzle.js';
import readFile from '../../utils/readFile.js';
import { describe, expect, test } from 'vitest';

describe('Day #', async () => {
	test('first solution test', async () => {
		const input = await readTestFile();
		expect(first(input)).toBe(expectedFirstSolution);
	});

	test('second solution test', async () => {
		const input = await readTestFile();
		expect(second(input)).toBe(expectedSecondSolution);
	});

	test('max Joltage', async () => {
		expect(maxJoltage('89')).toBe(89);
		expect(maxJoltage('99')).toBe(99);
		expect(maxJoltage('987', 3)).toBe(987);
		expect(maxJoltage('987654321111111')).toBe(98);
		expect(maxJoltage('987654321111111', 3)).toBe(987);
		expect(maxJoltage('81119')).toBe(89);
		expect(maxJoltage('234234234234278')).toBe(78);
		expect(maxJoltage('818181911112111')).toBe(92);
	});

	test('maxDigit', async () => {
		expect(maxDigit([9, 9])).toMatchObject([0, 9]);
		expect(maxDigit([8, 9])).toMatchObject([1, 9]);
		expect(maxDigit([7, 8, 9])).toMatchObject([2, 9]);
		expect(maxDigit([9, 8, 7], 1)).toMatchObject([1, 8]);
	});

	async function readTestFile(num: number = 1) {
		const inputFile = path.join(__dirname, `example-test-${num}.txt`);
		return await readFile(inputFile);
	}
});
