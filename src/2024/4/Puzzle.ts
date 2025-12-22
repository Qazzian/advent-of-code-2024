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
  return findX_Mas(input);
};

function findX_Mas(input: string): number {
  const theGrid = toGrid(input);
  let total = 0;
  
  theGrid.forEach((value, x, y) => {
    if (x === 0 || y === 0 || x === theGrid.width -1 || y === theGrid.height-1) {
      return;
    }
    if (value === 'A') {
			const pos = vector(x, y);
			const [nw, se] = [theGrid.at(add(pos, NW)), theGrid.at(add(pos, SE))];
			const [ne, sw] = [theGrid.at(add(pos, NE)), theGrid.at(add(pos, SW))];
      if (((nw === 'M' && se === 'S') || (nw === 'S' && se === 'M')) &&
        ((ne === 'M' && sw === 'S') || (ne === 'S' && sw === 'M'))
      ) {
        total += 1;
      }
		}
  })

  return total;
}

const expectedSecondSolution = 9;

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
