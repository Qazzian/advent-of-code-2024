import { existsSync, copyFileSync, mkdirSync, writeFileSync } from 'fs';
import path from 'path';

/**
 * Creates the boilerplate code for a new puzzle
 * Usage: npm run init-day {dayNumber} i.e npm run 1
 * It will create a new folder under src/days/{dayNumber}
 * with the boilerplate code to build the solution, and an empty input .txt file.
 */

const args = process.argv.slice(2);
const day = args[0];
const year = args[1] ?? '2025';

if (!day) {
	console.log('Please run with the day to bootstrap, i.e. npm run init-day 1');
}
console.log(`creating template for day ${year}/${day}`);
const newDayPath = path.join('src', year, day);

if (!existsSync(path.join('src', year))) {
	mkdirSync(path.join('src', year));
}

if (existsSync(newDayPath)) {
	console.log(`day ${year}/${day} already exists`);
	process.exit(0);
}
mkdirSync(newDayPath);
copyFileSync(`${__dirname}/Puzzle.ts.tpl`, `${newDayPath}/Puzzle.ts`);
copyFileSync(`${__dirname}/Puzzle.test.ts.tpl`, `${newDayPath}/Puzzle.test.ts`);
writeFileSync(`${newDayPath}/input.txt`, '');
writeFileSync(`${newDayPath}/example-test-1.txt`, '');
writeFileSync(`${newDayPath}/example-test-2.txt`, '');
