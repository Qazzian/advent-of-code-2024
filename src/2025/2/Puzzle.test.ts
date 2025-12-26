import * as path from 'path';
import {
	first,
	expectedFirstSolution,
	second,
	expectedSecondSolution,
	isInvalid,
	isInValidPt2,
	isValidForPart,
} from './Puzzle.js';
import readFile from '../../utils/readFile.js';
import { describe, expect, test } from 'vitest';

describe('Day 2', async () => {
	test('first solution test', async () => {
		const input = await readTestFile();
		expect(first(input)).toBe(expectedFirstSolution);
	});

	test('is invalid', async () => {
		expect(isInvalid(11)).toBe(true);
		expect(isInvalid(12)).toBe(false);
		expect(isInvalid(1188511885)).toBe(true);
		expect(isInvalid(1188511880)).toBe(false);
	});

	test('second solution test', async () => {
		const input = await readTestFile();
		expect(second(input)).toBe(expectedSecondSolution);
		expect(second('709-872')).toBe(777);
		expect(second('2487-3128')).toBe(16665);
		expect(second('709-872,2487-3128')).toBe(777 + 16665);
		expect(second('2-16')).toBe(11);
	});

	test('is invalid part 2', async () => {
		expect(isInValidPt2(1)).toBe(false);
		expect(isInValidPt2(11)).toBe(true);
		expect(isInValidPt2(12)).toBe(false);
		expect(isInValidPt2(111)).toBe(true);
		expect(isInValidPt2(112)).toBe(false);
		expect(isInValidPt2(1212)).toBe(true);
		expect(isInValidPt2(1112)).toBe(false);
		expect(isInValidPt2(101)).toBe(false);
		expect(isInValidPt2(123123)).toBe(true);
		expect(isInValidPt2(123123123)).toBe(true);
		expect(isInValidPt2(121212)).toBe(true);
		expect(isInValidPt2(121213)).toBe(false);
	});

	test('isValidForPart', async () => {
		expect(isValidForPart('1', 1)).toBe(true);
		expect(isValidForPart('12', 1)).toBe(true);
		expect(isValidForPart('11', 1)).toBe(false);
		expect(isValidForPart('111', 1)).toBe(false);
		expect(isValidForPart('112', 1)).toBe(true);
		expect(isValidForPart('1123', 2)).toBe(true);
		expect(isValidForPart('1212', 2)).toBe(false);
		expect(isValidForPart('121212', 2)).toBe(false);
		expect(isValidForPart('121213', 2)).toBe(true);
		expect(isValidForPart('123123', 3)).toBe(false);
		expect(isValidForPart('123123123', 3)).toBe(false);
		expect(isValidForPart('123412345', 5)).toBe(true);
	});

	async function readTestFile(num: number = 1) {
		const inputFile = path.join(__dirname, `example-test-${num}.txt`);
		return await readFile(inputFile);
	}
});
