import type { Action } from './Action'
import Constants from './Constants'
import { generateChoicesArray, generateGoal } from './NewGameUtils'
import { Operation } from './Operations'

export class GameState {
  choices: number[] = []
  goal: number = 0
  leftIndex: number = Constants.HiddenChoiceValue
  rightIndex: number = Constants.HiddenChoiceValue
  operationSelected: string = Operation.None
  errorClick: number = -1
  actionsTaken: Action[] = []
  victoryState: boolean = false

  constructor(choices: number[], goal: number) {
    this.choices = choices
    this.goal = goal
  }

  public static Create = () => {
    const choices = generateChoicesArray()
    const goal = generateGoal(choices)

    return new GameState(choices, goal)
  }
}
