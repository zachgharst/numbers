<script lang="ts">
	import { onMount } from 'svelte';
	import { newGame } from '$lib/NewGameUtils';

	let gameState = {
		choices: [0],
		goal: 0,
		leftIndex: -1,
		rightIndex: -1,
		operationIndex: -1,
		errorClick: -1
	};

	let operationButtons = ['u', '+', '-', '*', '/'];

	onMount(() => {
		gameState = newGame();
	});

	const isValidExpression = (leftIndex: number, operation: string, rightIndex: number) => {
		const left = gameState.choices[leftIndex];
		const right = gameState.choices[rightIndex];

		if (operation == '-' && left - right < 0) {
			return false;
		}

		if (operation == '/' && left % right !== 0) {
			return false;
		}

		return true;
	};

	const makePlay = (leftIndex: number, operation: string, rightIndex: number) => {
		gameState.leftIndex = rightIndex;
		gameState.operationIndex = -1;

		const left = gameState.choices[leftIndex];
		const right = gameState.choices[rightIndex];
		let result = 0;

		switch (operation) {
			case '+':
				result = left + right;
				break;
			case '-':
				result = left - right;
				break;
			case '*':
				result = left * right;
				break;
			case '/':
				result = left / right;
				break;
		}

		gameState.choices[rightIndex] = result;
		gameState.choices[leftIndex] = 0;

		console.log(`Result should be ${result}`);
		if (gameState.choices.includes(gameState.goal)) {
			alert('holy shit you win!');
		}
	};

	const handleChoiceClick = (index: number) => {
		if (gameState.choices[index] === 0) {
			return;
		}

		if (gameState.operationIndex !== -1 && gameState.leftIndex !== index) {
			const leftIndex = gameState.leftIndex;
			const operation = operationButtons[gameState.operationIndex];
			const rightIndex = index;

			if (isValidExpression(leftIndex, operation, rightIndex)) {
				makePlay(leftIndex, operation, rightIndex);
			} else {
				gameState.errorClick = index;
				setTimeout(() => {
					gameState.errorClick = -1;
				}, 2000);
			}
		} else if (gameState.leftIndex === index) {
			gameState.leftIndex = -1;
			gameState.operationIndex = -1;
		} else {
			gameState.leftIndex = index;
		}
	};

	const handleOperationClick = (index: number) => {
		if (index === 0) {
			console.log('Clicked undo');
		} else if (gameState.leftIndex !== -1) {
			gameState.operationIndex = index;
		}
	};
</script>

<h1>{gameState.goal}</h1>

<div>
	{#each gameState.choices as choice, index}
		<button
			class="numberChoice {gameState.leftIndex === index ? 'selected' : ''}"
			class:invisible={choice === 0}
			class:error={gameState.errorClick === index}
			on:click={() => handleChoiceClick(index)}
		>
			{choice}
		</button>
	{/each}
</div>

<div>
	{#each operationButtons as opButton, index}
		<button
			class="opButton {gameState.operationIndex === index ? 'selected' : ''}"
			on:click={() => handleOperationClick(index)}
		>
			{opButton}
		</button>
	{/each}
</div>

<div>
	<button id="newGame" on:click={() => (gameState = newGame())}>New Game</button>
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

	.selected {
		background: #b891bf;
		border: 0;
	}

	.error {
		border-color: red;
		color: red;
	}

	.invisible {
		opacity: 0;
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
