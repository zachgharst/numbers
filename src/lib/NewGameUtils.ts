import { GameState } from './GameState'

export const generateRandomNumber = (min: number, max: number): number => {
  const range = max - min
  return min + Math.floor(Math.random() * range)
}

export const generateChoicesArray = (): number[] => {
  const result = []

  let min = 1
  let max = 5

  for (let i = 0; i < 7; i++) {
    result.push(generateRandomNumber(min, max))
    min = result[result.length - 1] + 1
    max = min + 5
  }

  return result
}

export const generateGoal = (choices: number[]): number => {
  const numberOfOperations = 4
  let choicesCopy = structuredClone(choices)
  let result = 0

  const firstIndex = Math.floor(Math.random() * choicesCopy.length)
  //const firstIndex = generateRandomNumber(0, choicesCopy.length);
  let first = choicesCopy[firstIndex]
  choicesCopy = choicesCopy.filter((c: number) => c !== first)

  for (let i = 0; i < numberOfOperations; i++) {
    const secondIndex = Math.floor(Math.random() * choicesCopy.length)
    const second = choicesCopy[secondIndex]
    choicesCopy = choicesCopy.filter((c: number) => c !== second)

    const operations = ['+', '+', '-']

    if (first * second < 600) {
      operations.push('*')
      operations.push('*')
      operations.push('*')
    }

    if (first % second === 0 || second % first === 0) {
      operations.push('/')
      operations.push('/')
      operations.push('/')
      operations.push('/')
    }

    const o = operations[Math.floor(Math.random() * operations.length)]

    switch (o) {
      case '+':
        result = first + second
        break
      case '-':
        result = first - second

        if (result < 0) {
          result *= -1
        }

        break
      case '*':
        result = first * second
        break
      case '/':
        if (first > second) {
          result = first / second
        } else {
          result = second / first
        }

        break
    }

    first = result
  }

  if (choices.includes(result)) {
    return generateGoal(choices)
  }

  return result
}

export const newGame = () => {
  const choices = generateChoicesArray()
  const goal = generateGoal(choices)

  return new GameState(choices, goal)
}
