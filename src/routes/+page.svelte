<script lang="ts">
  import { onMount } from 'svelte'
  import { GameState } from '$lib/GameState'
  import Goal from '$lib/Components/Goal.svelte'
  import Choices from '$lib/Components/Choices.svelte'
  import Operations from '$lib/Components/Operations.svelte'
  import NewGameButton from '$lib/Components/NewGameButton.svelte'

  let gameState = new GameState([0, 0, 0, 0, 0, 0, 0], 0)
  onMount(() => {
    gameState = GameState.Create()
  })
</script>

<div class="container">
  <Goal goal={gameState.goal} />
  <Choices bind:gameState={gameState} />
  <Operations bind:gameState={gameState} />
  <NewGameButton newGame={() => (gameState = GameState.Create())} />
</div>

<style>
  div {
    animation: fadeInAnimation ease 2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    text-align: center;
  }

  .container {
    margin: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    15% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
