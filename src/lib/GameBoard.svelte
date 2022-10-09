<script lang="ts">
  import { onMount } from "svelte";

  import { game } from "./stores/game";

  onMount(() => {
    game.initialize();
  })

</script>

<div class="game-board">
  {#each $game.board as row, i (i)}
    <div class="row">
      {#each row as col, j (j)}
        <div class="col">{col.mine}</div>
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
  }
</style>
