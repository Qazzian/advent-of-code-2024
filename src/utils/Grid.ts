import { Vector } from './Vector.js';

export default class Grid<T> {
	private readonly values: T[][];
	width: number;
	height: number;

	constructor(values: T[][]) {
		this.values = values;
		this.width = values[0].length;
		this.height = values.length;
	}

	// at(x: number, y: number): T {
	// 	return this.values[y][x];
	// }
	at([x, y]: Vector) {
		return this.values[y][x];
	}

	hasPos([x, y]: Vector) {
		if (x < 0) return false;
		if (y < 0) return false;
		if (y >= this.height) return false;
		if (x >= this.values[y].length) return false;
		return true;
	}

	forEach(fn: (values: T, x:number, y:number) => any) {
		for(let y=0; y < this.values.length; y++) {
			for (let x = 0; x < this.values[y].length; x++) {
				fn(this.values[y][x], x, y);
			}
		}
	}
}