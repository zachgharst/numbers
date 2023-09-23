<script lang="ts">
	import { onMount } from 'svelte';
	import { GameState } from '$lib/GameState';
	import { newGame } from '$lib/NewGameUtils';
	import { Operation, operationButtons, operationUnicodeCharacter } from '$lib/Operations';
	import { Action } from '$lib/Action';

	let gameState = new GameState([], 0);
	onMount(() => {
		gameState = newGame();
	});

	const isValidExpression = (action: Action) => {
		if (action.operation == Operation.Subtract && action.leftValue - action.rightValue < 0) {
			return false;
		}

		if (action.operation == Operation.Divide && action.leftValue % action.rightValue !== 0) {
			return false;
		}

		return true;
	};

	const makePlay = (action: Action) => {
		gameState.leftIndex = action.rightIndex;
		gameState.operationSelected = Operation.None;

		let result = 0;

		switch (action.operation) {
			case Operation.Add:
				result = action.leftValue + action.rightValue;
				break;
			case Operation.Subtract:
				result = action.leftValue - action.rightValue;
				break;
			case Operation.Multiply:
				result = action.leftValue * action.rightValue;
				break;
			case Operation.Divide:
				result = action.leftValue / action.rightValue;
				break;
		}

		gameState.choices[action.rightIndex] = result;
		gameState.choices[action.leftIndex] = 0;

		if (gameState.choices.includes(gameState.goal)) {
			alert('holy shit you win!');
		}

		gameState.actionsTaken.push(action);
	};

	const undo = () => {
		if (gameState.actionsTaken.length === 0) {
			return;
		}

		const lastAction = gameState.actionsTaken.pop();

		gameState.choices[lastAction.leftIndex] = lastAction.leftValue;
		gameState.choices[lastAction.rightIndex] = lastAction.rightValue;
		gameState.leftIndex = -1;
		gameState.operationSelected = Operation.None;
	};

	const handleChoiceClick = (index: number) => {
		if (gameState.choices[index] === 0) {
			return;
		}

		if (gameState.operationSelected !== Operation.None && gameState.leftIndex !== index) {
			let action = new Action(
				gameState.leftIndex,
				gameState.choices[gameState.leftIndex],
				gameState.operationSelected,
				index,
				gameState.choices[index]
			);

			if (isValidExpression(action)) {
				makePlay(action);
			} else {
				gameState.errorClick = index;
				setTimeout(() => {
					gameState.errorClick = -1;
				}, 1000);
			}
		} else if (gameState.leftIndex === index) {
			gameState.leftIndex = -1;
			gameState.operationSelected = Operation.None;
		} else {
			gameState.leftIndex = index;
		}
	};

	const handleOperationClick = (operation: string) => {
		if (operation === Operation.Undo) {
			undo();
		} else if (gameState.leftIndex !== -1) {
			gameState.operationSelected = operation;
		}
	};
</script>

<div class="container">
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

	<div>
		<button id="newGame" on:click={() => (gameState = newGame())}>New Game</button>
	</div>
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

	.container {
		margin: auto;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.numberChoice {
		background: none;
		border: 3px dotted #000;
		border-radius: 35px;
		height: 70px;
		font-size: 24px;
		margin: 5px;
		width: 70px;
	}

	.opButton {
		background: black;
		border-radius: 30px;
		border: 3px dotted #000;
		color: white;
		font-size: 24px;
		height: 60px;
		margin: 5px;
		width: 60px;
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

	/* on mobile, i want this to be a menu at the bottom of the screen */
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
