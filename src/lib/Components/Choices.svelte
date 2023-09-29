<script lang="ts">
  import { Action } from '$lib/Action'
  import type { GameState } from '$lib/GameState'
  import { Operation } from '$lib/Operations'

  export let gameState: GameState

  const HiddenChoiceValue: number = -1

  // this should be somewhere else
  const isValidExpression = (action: Action) => {
    if (action.operation == Operation.Subtract && action.leftValue - action.rightValue < 0) {
      return false
    }

    if (action.operation == Operation.Divide && action.leftValue % action.rightValue !== 0) {
      return false
    }

    return true
  }

  // this should also be somewhere else
  const makePlay = (action: Action) => {
    gameState.leftIndex = action.rightIndex
    gameState.operationSelected = Operation.None

    let result = 0

    switch (action.operation) {
      case Operation.Add:
        result = action.leftValue + action.rightValue
        break
      case Operation.Subtract:
        result = action.leftValue - action.rightValue
        break
      case Operation.Multiply:
        result = action.leftValue * action.rightValue
        break
      case Operation.Divide:
        result = action.leftValue / action.rightValue
        break
    }

    gameState.choices[action.rightIndex] = result
    gameState.choices[action.leftIndex] = HiddenChoiceValue

    if (gameState.choices.includes(gameState.goal)) {
      gameState.victoryState = true
    }

    gameState.actionsTaken.push(action)
  }

  const handleChoiceClick = (index: number) => {
    if (gameState.choices[index] === HiddenChoiceValue || gameState.victoryState) {
      return
    }

    if (gameState.operationSelected !== Operation.None && gameState.leftIndex !== index) {
      let action = new Action(
        gameState.leftIndex,
        gameState.choices[gameState.leftIndex],
        gameState.operationSelected,
        index,
        gameState.choices[index]
      )

      if (isValidExpression(action)) {
        makePlay(action)
      } else {
        gameState.errorClick = index
        setTimeout(() => {
          gameState.errorClick = -1
        }, 1000)
      }
    } else if (gameState.leftIndex === index) {
      gameState.leftIndex = -1
      gameState.operationSelected = Operation.None
    } else {
      gameState.leftIndex = index
    }
  }
</script>

<div>
  {#each gameState.choices as choice, index}
    <button
      class="numberChoice"
      class:error={gameState.errorClick === index}
      class:selected={gameState.leftIndex === index}
      class:invisible={choice === HiddenChoiceValue}
      class:victory={gameState.leftIndex === index && gameState.victoryState}
      on:click={() => handleChoiceClick(index)}
    >
      {choice}
    </button>
  {/each}
</div>

<style>
  .numberChoice {
    background: none;
    border-radius: 35px;
    border: 3px dotted #222;
    font-size: 24px;
    height: 70px;
    margin: 5px;
    width: 70px;
  }

  :global(.dark-mode) .numberChoice {
    border: 3px dotted #ddd;
    color: #ddd;
  }

  .error {
    border-color: #d22;
    color: #d22;
  }

  :global(.dark-mode) .error {
    border-color: #d22;
    color: #aa0000;
  }

  .selected,
  :global(.dark-mode) .selected {
    background: #b891bf;
    border: 0;
  }

  .invisible {
    opacity: 0;
  }

  .victory {
    background: #2a2 !important;
  }
</style>
