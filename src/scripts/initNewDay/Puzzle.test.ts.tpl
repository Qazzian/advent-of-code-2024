import * as path from 'path';
import {
	first,
	expectedFirstSolution,
	second,
	expectedSecondSolution,
} from './Puzzle.js';
import readFile from '../../utils/readFile.js';
import { describe, expect, test } from 'vitest';

describe('Day #', async () => {
	test('first solution test', async () => {
		const input = await readTestFile();
		expect(first(input)).toBe(expectedFirstSolution);
	});

	test('second solution test', async () => {
		const input = await readTestFile(2);
		expect(second(input)).toBe(expectedSecondSolution);
	});

	async function readTestFile(num: number = 1) {
		const inputFile = path.join(__dirname, `example-test-${num}.txt`);
		return await readFile(inputFile);
	}
});
