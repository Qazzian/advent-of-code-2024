import { readFile } from 'node:fs/promises';

export default (inputFilePath: string) => {
	return readFile(inputFilePath, 'utf-8');
};

