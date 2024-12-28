import { describe, test, expect } from 'vitest';
import path = require('node:path');
import { readFile } from 'node:fs/promises';
import { expectedFirstSolution, first } from './Puzzle.js';

describe('Day 5', () => {
	test('part 1', async () => {
		const input = await readTestFile();
		expect(first(input)).toBe(expectedFirstSolution);
	})
});


async function readTestFile(num: number = 1) {
	const inputFile = path.join(__dirname, `example-test-${num}.txt`);
	return await readFile(inputFile, 'utf8');
}
