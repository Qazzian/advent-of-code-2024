export default class NumberNode {
	value: number;
	before: NumberNode[] = [];
	after: NumberNode[] = [];
	constructor(value: number) {
		this.value = value;
	}

	preRule(value: NumberNode) {
		this.before.push(value);
		this.before.sort((a: NumberNode, b:NumberNode) => a.value - b.value);
	}

	postRule(value: NumberNode) {
		this.after.push(value);
		this.after.sort((a: NumberNode, b:NumberNode) => a.value - b.value);
	}
}