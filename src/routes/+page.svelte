<script>
    import { onMount } from 'svelte';

    let operationButtons = [ 'u', '+', '-', '*', '/' ];
    let choices = [];
    let goal = 0;

    const getRandomNumber = (min, max) => {
        const range = max - min;
        return min + Math.floor(Math.random() * range);
    }
    
    const populateChoices = () => {
        let result = [];

        let min = 1;
        let max = 5;

        for (let i = 0; i < 7; i++) {
            result.push(getRandomNumber(min, max));
            min = result[result.length - 1] + 1;
            max = min + 5;
        }

        return result;
    }

    const getGoal = () => {
        let numberOfOperations = 4;
        let choicesCopy = structuredClone(choices);
        let result = 0;

        let firstIndex = Math.floor(Math.random() * choicesCopy.length);
        let first = choicesCopy[firstIndex];
        choicesCopy = choicesCopy.filter(c => c !== first);

        for (let i = 0; i < numberOfOperations; i++) {
            let secondIndex = Math.floor(Math.random() * choicesCopy.length);
            let second = choicesCopy[secondIndex];
            choicesCopy = choicesCopy.filter(c => c !== second);

            let operations = [ '+', '+', '-' ];

            if (first * second < 600) {
                operations.push('*');
                operations.push('*');
                operations.push('*');
            }

            if (first % second === 0 || second % first === 0) {
                operations.push('/');
                operations.push('/');
                operations.push('/');
                operations.push('/');
            }

            let o = operations[Math.floor(Math.random() * operations.length)];

            switch(o) {
                case '+':
                    result = first + second;
                    break;
                case '-':
                    result = first - second;

                    if (result < 0) {
                        result *= -1;
                    }

                    break;
                case '*':
                    result = first * second;
                    break;
                case '/':
                    if (first > second) {
                        result = first / second;
                    } else {
                        result = second / first;
                    }

                    break;
            }

            first = result;
        }

        if (choices.includes(result)) {
            result = getGoal();
        }

        return result;
    }

    onMount(() => {
        choices = populateChoices();
        goal = getGoal();
    });

    const newGame = () => {
        choices = populateChoices();
        goal = getGoal();
    }

    const victoryState = () => {
        alert('You win!');
    }

    
    if (choices.includes(goal)) {
        victoryState();
    }
</script>

<h1>{goal}</h1>

<div>
    {#each choices as choice}
        <button class="numberChoice">{choice}</button>
    {/each}
</div>

<div>
    {#each operationButtons as opButton}
        <button class="opButton">{opButton}</button>
    {/each}
</div>

<div>
    <button id="newGame" on:click={newGame}>New Game</button>
</div>

<style>
    h1, div {
        animation: fadeInAnimation ease 2s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        text-align: center;
    }
    
    h1 {
        font-size: 100px;
        margin-top: 50px;
    }

    .numberChoice, .opButton {
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
