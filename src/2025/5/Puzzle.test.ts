import * as path from 'path';
import {
	first,
	expectedFirstSolution,
	second,
	expectedSecondSolution,
	parseRange,
	sortRange,
	mergeRange,
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

	test('parse Range', () => {
		expect(parseRange('1-3')).toMatchObject({ start: 1, end: 3 });
		expect(parseRange('3-1')).toMatchObject({ start: 3, end: 1 });
		expect(parseRange('2')).toMatchObject({ start: 2, end: 2 });
	});

	test('sort Range', () => {
		const r1 = { start: 1, end: 3 };
		const r2 = { start: 5, end: 9 };
		const r3 = { start: 2, end: 2 };
		expect(sortRange(r1, r2)).toBe(1);
		expect(sortRange(r2, r1)).toBe(-1);
		expect(sortRange(r1, r1)).toBe(0);
		expect(sortRange(r1, r3)).toBe(0);
	});

	test('merge Range', () => {
		const r1 = { start: 1, end: 3 };
		const r2 = { start: 5, end: 9 };
		expect(mergeRange(r1, r2)).toMatchObject({ start: 1, end: 9 });
	});

	async function readTestFile(num: number = 1) {
		const inputFile = path.join(__dirname, `example-test-${num}.txt`);
		return await readFile(inputFile);
	}
});
