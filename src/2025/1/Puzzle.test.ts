import * as path from 'path';
import {
	first,
	expectedFirstSolution,
	second,
	expectedSecondSolution,
	countPasses,
} from './Puzzle.js';
import readFile from '../../utils/readFile.js';
import { describe, expect, test } from 'vitest';

describe('Day 1', async () => {
	test('first solution test', async () => {
		const input = await readTestFile();
		expect(first(input)).toBe(expectedFirstSolution);
	});

	test('second solution test', async () => {
		const input = await readTestFile();
		expect(second(input)).toBe(expectedSecondSolution);
		const input2 = await readTestFile(2);
		expect(second(input2)).toBe(expectedSecondSolution + 20);
	});

	test('countPasses', async () => {
		expect(countPasses(0, 'L1', 10).count).toBe(0);
		expect(countPasses(0, 'L10', 10).count).toBe(1);
		expect(countPasses(0, 'L5', 10).count).toBe(0);

		expect(countPasses(5, 'L1', 10).count).toBe(0);
		expect(countPasses(5, 'L10', 10).count).toBe(1);
		expect(countPasses(5, 'L5', 10).count).toBe(1);
		expect(countPasses(5, 'L20', 10).count).toBe(2);
		expect(countPasses(5, 'R1', 10).count).toBe(0);
		expect(countPasses(5, 'R10', 10).count).toBe(1);
		expect(countPasses(5, 'R5', 10).count).toBe(1);
		expect(countPasses(5, 'R20', 10).count).toBe(2);
	});

	async function readTestFile(num: number = 1) {
		const inputFile = path.join(__dirname, `example-test-${num}.txt`);
		return await readFile(inputFile);
	}
});
