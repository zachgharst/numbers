import { Operation } from './Operations';

export class GameState {
	choices: number[] = [];
	goal: number = 0;
	leftIndex: number = -1;
	rightIndex: number = -1;
	operationSelected: string = Operation.None;
	errorClick: number = -1;
	actionsTaken: Action[] = [];

	constructor(choices: number[], goal: number) {
		this.choices = choices;
		this.goal = goal;
	}
}
