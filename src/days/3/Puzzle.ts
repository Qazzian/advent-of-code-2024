


const first = (input: string) => {
  const functionList = findMathFunctions(input);
  const total = functionList.reduce((runningTotal: number, func: string) => {
		return runningTotal + toMath(func);
	}, 0);
  console.log(functionList, total);
  return total;
};

const expectedFirstSolution = 161;

const second = (input: string) => {
  return 'solution 2';
};

const expectedSecondSolution = 48;

export { first, expectedFirstSolution, second, expectedSecondSolution };


const extractRegexp = /(mul\(\d+,\d+\))/g;
const functionRegexp = /mul\((\d+),(\d+)\)/;

export function findMathFunctions(input: string): string[] {
  const matches = input.match(extractRegexp);
  return matches;
}

export function toMath(input: string) {
  const [, a,b] = input.match(functionRegexp);
  console.log(a, b);
  return (Number(a) * Number(b));
}