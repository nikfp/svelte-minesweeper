<script lang="ts">
  import type { ISquare } from "./stores/root/_game";
  import { game } from "./stores/game";

  export let square: ISquare;
  $: adjacent = !square.covered && square.adjacentMines > 0 ? "adjacent" : "";
  $: covered = square.covered ? "covered" : "";
</script>

<div
  class="square {covered} {adjacent}"
  style="width: calc(100% / {$game.size})"
  on:click={() => game.handleClick(square.row, square.col)}
  on:contextmenu|preventDefault={() =>
    game.handleRightClick(square.row, square.col)}
>
  {#if square.covered && square.flag}
    <img src="flag.png" alt="flag" />
  {/if}
  {#if !square.covered}
    {#if square.mine}
      <img src="mine.png" alt="mine" />
    {/if}
    {#if square.adjacentMines > 0}
      <img
        class="adjacent"
        src="number-{square.adjacentMines}.svg"
        alt="{square.adjacentMines} mines nearby"
      />
    {/if}
  {/if}
</div>

<style>
  .square {
    cursor: pointer;
    height: 100%;
    border-top: var(--square-border-size) solid var(--border-dark);
    border-right: var(--square-border-size) solid var(--border-light);
    border-bottom: var(--square-border-size) solid var(--border-light);
    border-left: var(--square-border-size) solid var(--border-dark);
    background-color: var(--square-uncovered);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .red {
    color: red;
  }
  .covered {
    border-top: var(--square-border-size) solid var(--border-light);
    border-right: var(--square-border-size) solid var(--border-dark);
    border-bottom: var(--square-border-size) solid var(--border-dark);
    border-left: var(--square-border-size) solid var(--border-light);
    background-color: var(--square-covered);
  }
  .adjacent {
    padding: .125em;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>
