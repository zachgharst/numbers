export const Operation = {
	None: 'none',
	Undo: 'undo',
	Add: 'add',
	Subtract: 'subtract',
	Multiply: 'multiply',
	Divide: 'divide'
};

export const operationButtons = [
	Operation.Undo,
	Operation.Add,
	Operation.Subtract,
	Operation.Multiply,
	Operation.Divide
];

export const operationUnicodeCharacter = (operation: string) => {
	switch (operation) {
		case Operation.Undo:
			return '⎌';
		case Operation.Add:
			return '+';
		case Operation.Subtract:
			return '-';
		case Operation.Multiply:
			return '×';
		case Operation.Divide:
			return '÷';
	}

	return '';
};
