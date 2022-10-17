<script lang="ts">
  import { game } from "./stores/game";
</script>

<footer>
  <button on:click={() => game.reset()}>Reset</button>
</footer>

<style>
  footer {
    height: 15vh;
  }
</style>
