import {describe, expect, test} from 'vitest';
import {first, toMath, findMathFunctions} from './Puzzle';
import path = require('node:path');
import { readFile } from 'node:fs/promises';

describe('Day 3', () => {
	test('text to result', () => {
		expect(toMath('mul(2,4)')).toBe(8);
	});

	test('extract functions', async () => {
		const input = await readTestFile(1);
		const functionList: string[] = findMathFunctions(input);
		expect(functionList.length).toBe(4);
	});

	test('first solution test', async () => {
		const input = await readTestFile(1);
		expect(first(input)).toBe(161);
	});
});


async function readTestFile(num: number = 1) {
	const inputFile = path.join(__dirname, `example-test-${num}.txt`);
	return await readFile(inputFile, 'utf-8');
}
