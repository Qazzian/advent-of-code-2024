import type Puzzle from './types/Puzzle';
import readFile from './utils/readFile';

const args = process.argv.slice(2);
const dayToSolve = args[0];
const year = args[1] ?? '2025';

if (!dayToSolve) {
	console.error('No day specified run with npm run dev {day}');
	process.exit(1);
}
console.log(`Solving Day #${args[0]} ${year}`);
(async () => {
	let input = '';
	const puzzleName = args[0];
	try {
		const puzzlePath = `src/${year}/${puzzleName}`;
		input = await readFile(`${puzzlePath}/input.txt`);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
	const { first, second }: Puzzle = await import(
		`./${year}/${puzzleName}/Puzzle`
	);

	console.log(first(input));
	console.log(second(input));
})();
