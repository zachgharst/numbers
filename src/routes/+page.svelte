<script lang="ts">
	import { onMount } from 'svelte';
    import { GameState } from '$lib/GameState';
	import { newGame } from '$lib/NewGameUtils';
    import { Operation, operationButtons, operationUnicodeCharacter } from '$lib/Operations';
    import { Action} from '$lib/Action';

	let gameState = new GameState([], 0);

	onMount(() => {
		gameState = newGame();
	});

	const isValidExpression = (action: Action) => {
		const left = gameState.choices[action.leftIndex];
		const right = gameState.choices[action.rightIndex];

		if (action.operation == Operation.Subtract && left - right < 0) {
			return false;
		}

		if (action.operation == Operation.Divide && left % right !== 0) {
			return false;
		}

		return true;
	};

	const makePlay = (action: Action) => {
		gameState.leftIndex = action.rightIndex;
		gameState.operationSelected = Operation.None;

		const left = gameState.choices[action.leftIndex];
		const right = gameState.choices[action.rightIndex];
		let result = 0;

		switch (action.operation) {
			case Operation.Add:
				result = left + right;
				break;
			case Operation.Subtract:
				result = left - right;
				break;
			case Operation.Multiply:
				result = left * right;
				break;
			case Operation.Divide:
				result = left / right;
				break;
		}

		gameState.choices[action.rightIndex] = result;
		gameState.choices[action.leftIndex] = 0;

		if (gameState.choices.includes(gameState.goal)) {
			alert('holy shit you win!');
		}

        gameState.actionsTaken.push(action);
	};

	const handleChoiceClick = (index: number) => {
		if (gameState.choices[index] === 0) {
			return;
		}

		if (gameState.operationSelected !== Operation.None && gameState.leftIndex !== index) {
            let action = new Action(gameState.leftIndex, gameState.operationSelected, index);

			if (isValidExpression(action)) {
				makePlay(action);
			} else {
				gameState.errorClick = index;
				setTimeout(() => {
					gameState.errorClick = -1;
				}, 2000);
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
			console.log('Clicked undo');
		} else if (gameState.leftIndex !== -1) {
			gameState.operationSelected = operation;
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
