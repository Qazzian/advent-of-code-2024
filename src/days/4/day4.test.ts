import { describe, expect, it } from 'vitest';
import { expectedFirstSolution, findXmas, first, toGrid } from './Puzzle.js';
import path = require('node:path');
import readFile from '../../utils/readFile.js';


describe('Day 4', () => {
	describe('simple examples', () => {
		it('should find XMAS left to right', () => {
			expect(findXmas('XMAS')).toBe(1);
			expect(findXmas('qXMAS')).toBe(1);
			expect(findXmas('XMASq')).toBe(1);
			expect(findXmas('XMASXMAS')).toBe(2);
			expect(findXmas('XMAS\nXMAS\n')).toBe(2);
		});

		it('should find XMAS right to left', () => {
			expect(findXmas('SAMX')).toBe(1);
			expect(findXmas('SAMX\nSAMX')).toBe(2);
			expect(findXmas('SA\nMX')).toBe(0);
			expect(findXmas('SAMX\nXMAS')).toBe(2);
			expect(findXmas('abcSAMXbgt')).toBe(1);
		});

		it('should find XMAS top to bottom', () => {
			expect(findXmas('X\nM\nA\nS')).toBe(1);
			
		});

		it('should find XMAS bottom to top', () => {
			expect(findXmas('S\nA\nM\nX')).toBe(1);
		});

		it('should find XMAS diagonal top-left to bottom-right', () => {
			expect(findXmas('X...\n.M..\n..A.\n...S')).toBe(1);
		});

		it('should find diagonal top-right to bottom left', () => {
			expect(findXmas('...X\n..M.\n.A..\nS...')).toBe(1);
		});

		it('should find diagonal bottom-left to top-right', () => {
			expect(findXmas('...S\n..A.\n.M..\nX...')).toBe(1);
		});

		it('should find diagonal bottom-right to top-left', () => {
			expect(findXmas('S...\n.A..\n..M.\n...X')).toBe(1);
		});
	});

	it('part 1', async () => {
		const testInput = await readTestFile();
		expect(first(testInput)).toBe(expectedFirstSolution);
	});

	describe('utility functions', () => {
		it('should create a grid from basic input', () => {
			const grid = toGrid('abcd\nefgh\nijkl\nmnop');
			expect(grid.height).toBe(4);
			expect(grid.width).toBe(4);
		});
	})
});



async function readTestFile(num: number = 1) {
	const inputFile = path.join(__dirname, `example-test-${num}.txt`);
	return await readFile(inputFile);
}
