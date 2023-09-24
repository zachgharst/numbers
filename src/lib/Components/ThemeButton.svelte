<script lang="ts">
  import { theme } from '$lib/store'

  const swapTheme = () => {
    if ($theme === 'dark') {
      $theme = 'light'
      document.body.classList.remove('dark-mode')
    } else {
      $theme = 'dark'
      document.body.classList.add('dark-mode')
    }
  }
</script>

<div>
  <button id="theme" on:click={() => swapTheme()}
    >{$theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</button
  >
</div>

<style>
  /* on mobile, i want this to be a menu at the bottom of the screen */
  #theme {
    background: #95a23a;
    border: 0;
    border-radius: 5px;
    color: white;
    font-size: 25px;
    font-weight: bold;
    margin-top: 10px;
    padding: 10px 20px;
    width: 200px;
  }

  :global(dark-mode) #theme {
    background: #d5e26a;
  }
</style>
