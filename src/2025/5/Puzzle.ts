import { BinaryTree } from '../../utils/BinaryTree.js';
import { al } from 'vitest/dist/reporters-5f784f42.js';

interface Range {
	start: number;
	end: number;
}

const first = (input: string) => {
	const [allRanges, allIds] = input.split('\n\n');
	const rangeList = allRanges.split('\n');
	const rangeTree = new BinaryTree<Range>(
		parseRange(rangeList[0]),
		sortRange,
		mergeRange
	);
	rangeList.forEach((r) => {
		rangeTree.insert(parseRange(r));
	});

	const ids = allIds.split('\n');
	let freshCount = 0;
	ids.forEach((id) => {
		if (rangeTree.has(parseRange(id))) {
			freshCount++;
		}
	});

	return freshCount;
};

const expectedFirstSolution = 3;

const second = (input: string) => {
	return 'solution 2';
};

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };

export function parseRange(str: string): Range {
	const [start, end] = str.split('-');
	return {
		start: parseInt(start),
		end: parseInt(end ?? start),
	};
}

export function sortRange(rangeA: Range, rangeB: Range): number {
	if (rangeB.end < rangeA.start) {
		return -1;
	}
	if (rangeB.start > rangeA.end) {
		return 1;
	}
	return 0;
}

export function mergeRange(rangeA: Range, rangeB: Range) {
	return {
		start: Math.min(rangeA.start, rangeB.start),
		end: Math.max(rangeA.end, rangeB.end),
	};
}
