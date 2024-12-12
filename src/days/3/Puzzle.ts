


const first = (input: string) => {
  const functionList = findMathFunctions(input);
  const total = functionList.reduce(multiplierReducer, 0);
  return total;
};

const expectedFirstSolution = 161;

const second = (input: string) => {
  const doParts = findDoParts(input);
  return doParts.reduce((runningTotal: string[], doLine: string) => {
    return runningTotal.concat(findMathFunctions(doLine));
  }, []).reduce(multiplierReducer, 0);

};

const expectedSecondSolution = 48;

export { first, expectedFirstSolution, second, expectedSecondSolution };


const extractRegexp = /(mul\(\d+,\d+\))/g;
const functionRegexp = /mul\((\d+),(\d+)\)/;

export function findMathFunctions(input: string): string[] {
  return input.match(extractRegexp);
}

export function multiplierReducer(runningTotal: number, func: string): number {
  return runningTotal + toMath(func);
}

export function toMath(input: string) {
  const [, a,b] = input.match(functionRegexp);
  return (Number(a) * Number(b));
}

export function findDoParts(input: string): string[] {
  const parts: string[] = [];
  let inDoSection = true;
  let index: number = 0;

  do {
    let nextIndex = input.indexOf(inDoSection ? "don't()" : "do()", index);
    if(nextIndex === -1) {
      nextIndex = input.length;
    }
    if (inDoSection) {
      parts.push(input.slice(index, nextIndex));
      index = nextIndex + 7;
      inDoSection = false;
		}
    else {
      index = nextIndex + 4;
      inDoSection = true;
    }
    
  } while (index < input.length);

  return parts;
}