import { Vector, isEqual } from './Vector.js';

export default class Grid<T> {
	private readonly values: T[][];
	width: number;
	height: number;

	constructor(values: T[][]) {
		this.values = values;
		this.width = values[0].length;
		this.height = values.length;
	}

	at([x, y]: Vector) {
		return this.values[y][x];
	}

	set([x, y]: Vector, value: T) {
		if (this.hasPos([x, y])) {
			this.values[y][x] = value;
		}
	}

	hasPos([x, y]: Vector) {
		if (x < 0) {
			return false;
		}
		if (y < 0) {
			return false;
		}
		if (y >= this.height) {
			return false;
		}
		return x < this.values[y].length;
	}

	forEach(fn: (values: T, x: number, y: number) => void) {
		for (let y = 0; y < this.values.length; y++) {
			for (let x = 0; x < this.values[y].length; x++) {
				fn(this.values[y][x], x, y);
			}
		}
	}

	around(center: Vector, callback: (value: T, pos: Vector) => void) {
		for (let y = center[1] - 1; y <= center[1] + 1; y++) {
			for (let x = center[0] - 1; x <= center[0] + 1; x++) {
				if (this.hasPos([x, y]) && !isEqual([x, y], center)) {
					callback(this.at([x, y]), [x, y]);
				}
			}
		}
	}
}
