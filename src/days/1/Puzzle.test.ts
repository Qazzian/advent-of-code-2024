import * as path from 'path';
import { first, expectedFirstSolution, second, expectedSecondSolution } from './Puzzle.js';
import readFile from '../../utils/readFile.js';
import { expect, test } from 'vitest';


test('first solution test', async () => {
  const input = await readTestFile();
  expect(first(input)).toBe(expectedFirstSolution);
});

test('second solution test', async () => {
  const input = await readTestFile();
  expect(second(input)).toBe(expectedSecondSolution);
});

async function readTestFile() {
  const inputFile = path.join(__dirname, 'example-test-1.txt');
  return await readFile(inputFile);
}

