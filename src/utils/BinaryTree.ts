export class BinaryTree<T> {
	public value: T;
	public left: BinaryTree<T>;
	public right: BinaryTree<T>;

	public sort: (a: T, b: T) => number;
	public merge: (a: T, b: T) => T;

	constructor(
		value: T,
		sortFunction: (a: T, b: T) => number,
		mergeFunction?: (existingValue: T, newValue: T) => T
	) {
		this.value = value ?? null;
		this.sort = sortFunction;
		this.merge = mergeFunction;
		this.left = null;
		this.right = null;
	}

	insert(value: T) {
		if (this.value == null) {
			return (this.value = value);
		}
		const diff = this.sort(this.value, value);
		if (diff === 0 && this.merge) {
			this.value = this.merge(this.value, value);
		} else if (diff <= 0) {
			if (this.left == null) {
				this.left = new BinaryTree<T>(value, this.sort, this.merge);
			} else {
				this.left.insert(value);
			}
		} else if (diff > 0) {
			if (this.right == null) {
				this.right = new BinaryTree<T>(value, this.sort, this.merge);
			} else {
				this.right.insert(value);
			}
		}
	}

	has(value: T): boolean {
		if (this.value == null) {
			return false;
		}
		const diff = this.sort(this.value, value);
		if (diff === 0) {
			return true;
		}
		if (diff < 0 && this.left) {
			return this.left.has(value);
		}
		if (diff > 0 && this.right) {
			return this.right.has(value);
		}
		return false;
	}
}
