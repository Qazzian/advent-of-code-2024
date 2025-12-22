import { existsSync, copyFileSync, mkdirSync, writeFileSync } from 'fs';

/**
 * Creates the boilerplate code for a new puzzle
 * Usage: npm run init-day {dayNumber} i.e npm run 1
 * It will create a new folder under src/days/{dayNumber}
 * with the boilerplate code to build the solution, and an empty input .txt file.
 */

const args = process.argv.slice(2);
const day = args[0];
const year = '2025'; // TODO make into a variable or get from the current date

if (!day) {
	console.log('Please run with the day to bootstrap, i.e. npm run init-day 1');
}
console.log(`creating template for day ${day}`);
const basePath = `src/${year}`;

if (existsSync(`src/${year}/${day}`)) {
	console.log(`day ${year}/${day} already exists`);
	process.exit(0);
}
const newDayPath = `${basePath}/${day}`;
mkdirSync(newDayPath);
copyFileSync(`${__dirname}/Puzzle.ts.tpl`, `${newDayPath}/Puzzle.ts`);
writeFileSync(`${newDayPath}/input.txt`, '');
writeFileSync(`${newDayPath}/example-test-1.txt`, '');
writeFileSync(`${newDayPath}/example-test-2.txt`, '');
