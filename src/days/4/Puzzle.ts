import Grid from '../../utils/Grid.js';
import { N, NE, E, SE, S, SW, W, NW, vector, Vector, add } from '../../utils/Vector.js';

const directions: Vector[] = [N, NE, E, SE, S, SW, W, NW];

const first = (input: string) => {
  return findXmas(input);
};


export function findXmas(input: string): number {
  const theGrid = toGrid(input);
  let total = 0;

  theGrid.forEach((value, x, y) => {
    if (value === 'X') {
      for(let dir of directions) {
        // console.log('check dir: ', dir);
        total += checkDirection(theGrid, dir, vector(x, y), 'XMAS'.split('')) ? 1 : 0;
      }
		}
  });

  return total;
}

const expectedFirstSolution = 18;

const second = (input: string) => {
  return 'solution 2';
};

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };

export function toGrid(input: string): Grid<string> {
  const lines = input.split('\n');
  return new Grid<string>(lines.map(line => line.split('')));
}

export function checkDirection(grid: Grid<string>, dir: Vector, start: Vector, word: string[]): boolean {
  if (grid.at(start) === word[0]) {
    if (word.length === 1) {
			return true;
		}
    const nextPos = add(start, dir);
    if (grid.hasPos(nextPos)) {
      return checkDirection(grid, dir, nextPos, word.slice(1))
    }
  }
  return false;
}
