const first = (input: string) => {
  console.log(input);
  const lines = input.split('\n');
  const [list1, list2]: number[][] = [[],[]];

  lines.forEach((line) => {
    const [n1, n2] = line.split(/\s+/);
    list1.push(parseInt(n1));
    list2.push(parseInt(n2));
  });

  list1.sort();
  list2.sort();

  return list1.reduce((total, current, index) => {
    return total + Math.abs(current - list2[index]);
  }, 0);
};

const expectedFirstSolution = 11;

const second = (input: string) => {
  console.log(input);
  return 'solution 2';
};

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };
