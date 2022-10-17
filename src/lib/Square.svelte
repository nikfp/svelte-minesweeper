<script lang="ts">
  import type { ISquare } from "./stores/_game";
  import { game } from "./stores/game";

  export let square: ISquare;

  $: red = square.mine ? "red" : "";
  $: covered = square.covered ? "covered" : "";
</script>

<div
  class="square {red} {covered}"
  style="width: calc(100% / {$game.size})"
  on:click={() => game.handleClick(square.row, square.col)}
>
  {square.mine}
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
</style>
