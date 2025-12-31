import { describe, test, expect } from 'vitest';
import Grid from './Grid.js';
import { Vector } from './Vector.js';

describe('Grid', () => {
	test('Creation', () => {
		const testGrid = new Grid<number>([
			[1, 1, 1],
			[1, 1, 1],
		]);
		expect(testGrid.width).toBe(3);
		expect(testGrid.height).toBe(2);
	});
	test('around', () => {
		const testGrid = new Grid<number>([
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		]);
		let total = 0;
		function count(value: number) {
			total += value;
		}
		testGrid.around([1, 1], count);
		expect(total).toBe(40);
	});
});
