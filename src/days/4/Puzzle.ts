import Grid from '../../utils/Grid.js';
import {N, NE, E, SE, S, SW, W, NW} from '../../utils/Vector.js';

const directions = [N, NE, E, SE, S, SW, W, NW];

const first = (input: string) => {
  return 'solution 1';
};


export function findXmas(input: string): number {
  const theGrid = toGrid(input);
  theGrid.forEach((value, x, y) => {
    if (value === 'X') {
      

		}
  })

  const leftToRight = input.match(/XMAS/g)?.length ?? 0;
  const rightToLeft = input.match(/SAMX/g)?.length ?? 0;
  return leftToRight + rightToLeft;
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
