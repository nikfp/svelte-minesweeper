<script>
  import BoardSize from "./BoardSize.svelte";
  import Minecount from "./Minecount.svelte";
  import { allowers } from "./stores/allowers";
  $: lostGame = !$allowers.canPlay;
</script>

<header>
  <Minecount />
  {#if lostGame}
    <p>YOU LOST!</p>
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
