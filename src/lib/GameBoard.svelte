<script lang="ts">
  import { onMount } from "svelte";

  import Square from "./Square.svelte";

  import { game } from "./stores/game";

  onMount(() => {
    game.initialize();
  });

  
</script>

<div class="game-board">
  {#each $game.board as row, i (i)}
  <div class="row" style="height: calc(100% / {$game.size})">
      {#each row as col, j (j)}
        <Square square={col} />
      {/each}
    </div>
  {/each}
</div>

<style>
  .game-board {
    border: 2px solid black;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 0;
    margin-bottom: 0;
  }
</style>
