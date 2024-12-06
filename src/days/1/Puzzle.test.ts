import * as path from 'path';
import { first, expectedFirstSolution, second, expectedSecondSolution } from './Puzzle.js';
import readFile from '../../utils/readFile.js';
import { describe, expect, test } from 'vitest';

describe.only('Day 1', async () => {

  test('first solution test', async () => {
    const input = await readTestFile();
    expect(first(input)).toBe(expectedFirstSolution);
  });

  test.only('second solution test', async () => {
    const input = await readTestFile();
    expect(second(input)).toBe(expectedSecondSolution);
    const input2 = await readTestFile(2);
    expect(second(input2)).toBe(50);
  });

  async function readTestFile(num: number = 1) {
    const inputFile = path.join(__dirname, `example-test-${num}.txt`);
    return await readFile(inputFile);
  }
});

