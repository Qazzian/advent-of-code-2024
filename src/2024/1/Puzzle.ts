const first = (input: string) => {
	const [list1, list2] = prepLists(input);

	return list1.reduce((total, current, index) => {
		return total + Math.abs(current - list2[index]);
	}, 0);
};

const expectedFirstSolution = 11;

const second = (input: string) => {
	const [list1, list2] = prepLists(input);
	let [list1Index, list2Index] = [0, 0];
	let total = 0;

	while (list1Index < list1.length && list2Index < list2.length) {
		let n1 = list1[list1Index];
		let n1Total = 0;

		while (n1 < list2[list2Index] && list1Index < list1.length) {
			list1Index++;
			n1 = list1[list1Index];
		}
		while (n1 > list2[list2Index] && list2Index < list2.length) {
			list2Index++;
		}

		n1Total = 0;

		while (n1 === list2[list2Index] && list2Index < list2.length) {
			n1Total += n1;
			list2Index++;
		}
		do {
			total += n1Total;
			list1Index++;
		} while (list1[list1Index] === n1 && list1Index < list1.length);
	}

	return total;
};

function prepLists(input: string) {
	const lines = input.split('\n');
	const [list1, list2]: number[][] = [[], []];

	lines.forEach((line) => {
		const [n1, n2] = line.split(/\s+/);
		list1.push(parseInt(n1));
		list2.push(parseInt(n2));
	});

	list1.sort();
	list2.sort();

	return [list1, list2];
}

const expectedSecondSolution = 31;

export { first, expectedFirstSolution, second, expectedSecondSolution };
