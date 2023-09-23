<script>
	import { onMount } from 'svelte';
    import { newGame } from '$lib/NewGameUtils';

	let gameState = {
		choices: [ 0 ],
		goal: 0,
	};

	let operationButtons = ['u', '+', '-', '*', '/'];

	onMount(() => {
		gameState = newGame();
	});
</script>

<h1>{gameState.goal}</h1>

<div>
	{#each gameState.choices as choice}
		<button class="numberChoice">{choice}</button>
	{/each}
</div>

<div>
	{#each operationButtons as opButton}
		<button class="opButton">{opButton}</button>
	{/each}
</div>

<div>
	<button id="newGame" on:click={() => gameState = newGame()}>New Game</button>
</div>

<style>
	h1,
	div {
		animation: fadeInAnimation ease 2s;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
		text-align: center;
	}

	h1 {
		font-size: 100px;
		margin-top: 50px;
	}

	.numberChoice,
	.opButton {
		background: none;
		border: 3px dotted #000;
		border-radius: 38px;
		height: 75px;
		font-size: 24px;
		margin: 15px;
		width: 75px;
	}

	.opButton {
		background: black;
		color: white;
	}

	#newGame {
		background: #55c2da;
		border: 0;
		border-radius: 5px;
		color: white;
		font-size: 25px;
		font-weight: bold;
		margin-top: 50px;
		padding: 10px 20px;
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
