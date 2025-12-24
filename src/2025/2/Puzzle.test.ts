import * as path from 'path';
import {
	first,
	expectedFirstSolution,
	second,
	expectedSecondSolution,
	isInvalid,
} from './Puzzle.js';
import readFile from '../../utils/readFile.js';
import { describe, expect, test } from 'vitest';

describe('Day 1', async () => {
	test('first solution test', async () => {
		const input = await readTestFile();
		expect(first(input)).toBe(expectedFirstSolution);
	});

	test('second solution test', async () => {
		const input = await readTestFile(2);
		expect(second(input)).toBe(expectedSecondSolution);
	});

	test('is invalid', async () => {
		expect(isInvalid(11)).toBe(true);
		expect(isInvalid(12)).toBe(false);
		expect(isInvalid(1188511885)).toBe(true);
		expect(isInvalid(1188511880)).toBe(false);
	});

	async function readTestFile(num: number = 1) {
		const inputFile = path.join(__dirname, `example-test-${num}.txt`);
		return await readFile(inputFile);
	}
});
