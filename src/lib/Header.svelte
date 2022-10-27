<script>
  import BoardSize from "./BoardSize.svelte";
  import Minecount from "./Minecount.svelte";

  import { game } from "./stores/game";

  const { informers } = game;
  $: lostGame = $informers.gameState === "lost";
  $: wonGame = $informers.gameState === "won";
  $: playing = $informers.gameState === "playing";
</script>

<header>
  <Minecount />
  {#if playing}
    <p>Uncleared: {$informers.uncleared}</p>
    <p>Flags: {$informers.flagCount}</p>
  {/if}
  {#if lostGame}
    <p>YOU LOST!</p>
  {/if}
  {#if wonGame}
    <p>YOU WON!!!</p>
  {/if}
  <BoardSize />
</header>

<style>
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 15vh;
  }
</style>
