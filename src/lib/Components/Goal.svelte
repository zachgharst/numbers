<script lang="ts">
  export let goal: number
</script>

<h1>{goal}</h1>

<style>
  h1 {
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation: fadeInAnimation ease 2s;
    font-size: 100px;
    margin-top: 50px;
    text-align: center;
  }
</style>
