<script lang="ts">
  import { onMount } from 'svelte'
  import { GameState } from '$lib/GameState'
  import Goal from '$lib/Components/Goal.svelte'
  import Choices from '$lib/Components/Choices.svelte'
  import Operations from '$lib/Components/Operations.svelte'
  import NewGameButton from '$lib/Components/NewGameButton.svelte'
  import ThemeButton from '$lib/Components/ThemeButton.svelte'
  import { theme } from '$lib/store'

  let gameState = new GameState([0, 0, 0, 0, 0, 0, 0], 0)
  onMount(() => {
    gameState = GameState.Create()

    if ($theme !== 'dark') {
      document.body.classList.remove('dark-mode')
    }
  })
</script>

<div class="container">
  <Goal {gameState} />
  <Choices bind:gameState />
  <Operations bind:gameState />
  <NewGameButton newGame={() => (gameState = GameState.Create())} />
  <ThemeButton />
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
