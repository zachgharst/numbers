<script lang="ts">
  import type { GameState } from "$lib/GameState"

  export let gameState: GameState
</script>

{#if gameState.victoryState}
  <h1 class="victory">🎉 {gameState.goal} 🎉</h1>
{:else}
  <h1>{gameState.goal}</h1>
{/if}

<style>
  h1 {
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation: fadeInAnimation ease 2s;
    color: #222;
    font-size: 100px;
    line-height: 1.2em;
    margin-top: 50px;
    text-align: center;
  }

  :global(.dark-mode) h1 {
    color: #ddd;
  }

  .victory {
    color: #2a2 !important;
  }
</style>
