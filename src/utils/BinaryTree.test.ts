import { describe, expect, test } from 'vitest';
import { BinaryTree } from './BinaryTree.js';

describe('BinaryTree', () => {
	function numberSort(a: number, b: number): number {
		return b - a;
	}

	test('basic functions', () => {
		const tree = new BinaryTree(9, numberSort);
		expect(tree).toBeDefined();
		expect(tree.value).toBe(9);
	});

	test('insert function', () => {
		const tree = new BinaryTree(9, numberSort);
		tree.insert(8);
		expect(tree.left.value).toBe(8);
		tree.insert(18);
		expect(tree.right.value).toBe(18);
		tree.insert(118);
		expect(tree.right.right.value).toBe(118);
		tree.insert(15);
		expect(tree.right.left.value).toBe(15);
		expect(tree.has(9)).toBe(true);
		expect(tree.has(118)).toBe(true);
		expect(tree.has(77)).toBe(false);
	});
});
