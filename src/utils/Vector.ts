export type Vector = [x: number, y: number];

export const UP = vector(0, -1);
export const N = UP;
export const RIGHT = vector(1, 0);
export const E = RIGHT;
export const DOWN = vector(0, 1);
export const S = DOWN;
export const LEFT = vector(-1, 0);
export const W = LEFT;
export const NE = add(N, E);
export const SE = add(S, E);
export const SW = add(S, W);
export const NW = add(N, W);

export function vector(x: number, y: number): Vector {
	return [x, y];
}

export function add(a: Vector, b: Vector): Vector {
	return [a[0] + b[0], a[1] + b[1]];
}

export function isEqual(a: Vector, b: Vector) {
	return a[0] === b[0] && a[1] === b[1];
}
