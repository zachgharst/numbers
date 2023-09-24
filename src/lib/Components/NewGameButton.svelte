<script lang="ts">
  export let newGame: Function
</script>

<div>
  <button id="newGame" on:click={() => newGame()}>New Game</button>
</div>

<style>
  /* on mobile, i want this to be a menu at the bottom of the screen */
  #newGame {
    background: #3592aa;
    border: 0;
    border-radius: 5px;
    color: white;
    font-size: 25px;
    font-weight: bold;
    margin-top: 50px;
    padding: 10px 20px;
    width: 200px;
  }

  :global(.dark-mode) #newGame {
    background: #55c2da;
  }
</style>
