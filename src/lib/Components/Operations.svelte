<script lang="ts">
  import type { GameState } from '$lib/GameState'
  import { Operation, operationButtons, operationUnicodeCharacter } from '$lib/Operations'

  export let gameState: GameState

  const undo = () => {
    const lastAction = gameState.actionsTaken.pop()

    if (lastAction === undefined) {
      return
    }

    gameState.choices[lastAction.leftIndex] = lastAction.leftValue
    gameState.choices[lastAction.rightIndex] = lastAction.rightValue
    gameState.leftIndex = -1
    gameState.operationSelected = Operation.None
  }

  const handleOperationClick = (operation: string) => {
    if (operation === Operation.Undo) {
      undo()
    } else if (gameState.leftIndex !== -1) {
      gameState.operationSelected = operation
    }
  }
</script>

<div>
  {#each operationButtons as operation}
    <button
      class="opButton"
      class:selected={gameState.operationSelected === operation}
      on:click={() => handleOperationClick(operation)}
    >
      {operationUnicodeCharacter(operation)}
    </button>
  {/each}
</div>

<style>
  .opButton {
    background: #222;
    border-radius: 30px;
    border: 0;
    color: #ddd;
    font-size: 24px;
    height: 60px;
    margin: 5px;
    width: 60px;
  }

  :global(.dark-mode) .opButton {
    background: #ddd;
    color: #222;
  }

  .selected {
    background: #b891bf;
    border: 0;
  }

  :global(.dark-mode) .selected {
    background: #b891bf;
  }
</style>
